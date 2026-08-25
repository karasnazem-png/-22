const popeResults = document.getElementById('popeResults');
const pagerStatus = document.getElementById('pagerStatus');
const searchInput = document.getElementById('searchInput');
const resetFiltersButton = document.getElementById('resetFilters');
const randomPopeButton = document.getElementById('randomPope');
const sortToggleButton = document.getElementById('sortToggle');
const voiceSearchButton = document.getElementById('voiceSearchButton');
const filterButtons = document.querySelectorAll('.filter-button');

const getTotalPages = () => (Array.isArray(popeData) ? popeData.length : 0);
const searchMode = { value: 'all' };
let sortDescending = false;

function normalizeText(value = '') {
  return String(value).toLowerCase().trim();
}

function getFilteredPopes(query = '') {
  const cleanQuery = normalizeText(query);
  const source = Array.isArray(popeData) ? [...popeData] : [];

  if (!cleanQuery) {
    return sortDescending ? [...source].reverse() : source;
  }

  const matches = source.filter((pope) => {
    const inName = normalizeText(pope.name).includes(cleanQuery);
    const inStory = normalizeText(pope.story).includes(cleanQuery);
    const inReign = normalizeText(pope.reign).includes(cleanQuery);

    if (searchMode.value === 'name') return inName;
    if (searchMode.value === 'story') return inStory;
    if (searchMode.value === 'reign') return inReign;

    return inName || inStory || inReign || String(pope.id).includes(cleanQuery);
  });

  return sortDescending ? [...matches].reverse() : matches;
}

function renderPopes(filterText = '') {
  if (!popeResults || typeof popeData === 'undefined') return;

  const filteredPopes = getFilteredPopes(filterText);

  if (!filteredPopes.length) {
    popeResults.innerHTML = '<p class="no-results">لم يتم العثور على بطريرك مطابق.</p>';
    if (pagerStatus) pagerStatus.textContent = `0 / ${getTotalPages()}`;
    return;
  }

  popeResults.innerHTML = filteredPopes
    .map((pope) => {
      // Resolve the image from the canonical record so its printed number stays aligned.
      const globalIndex = Array.isArray(popeData) ? popeData.findIndex((g) => g.id === pope.id) : -1;
      let imgUrl = pope.image || (typeof getPopeImage === 'function' && globalIndex >= 0 ? getPopeImage(globalIndex) : '');

      const imageMarkup = imgUrl
        ? `<button class="image-view-button" type="button" data-image="${imgUrl}" data-title="${pope.name}" aria-label="عرض الصورة كاملة ${pope.name}" title="عرض الصورة كاملة"><img src="${imgUrl}" alt="${pope.name}" loading="lazy" /></button>`
        : '<div class="no-photo" role="img" aria-label="كتاب مقدس">كتاب مقدس</div>';

      return `
    <article class="pope-card">
      ${imageMarkup}
      <div class="pope-card-body">
        <div class="pope-card-top">
          <span class="pope-number">#${pope.id}</span>
          <span class="pope-tag">${pope.reign}</span>
        </div>
        <h3>${pope.name}</h3>
        <p class="pope-meta">المدة: ${pope.reign}</p>
        <p>الميلاد: ${pope.birth}</p>
        <p class="pope-description">${pope.story}</p>
        <div class="pope-actions">
          <button class="more-info-button" type="button" data-id="${pope.id}" data-title="${pope.name}" aria-label="عرض معلومات ${pope.name}">مزيد من المعلومات</button>
        </div>
      </div>
    </article>
  `;
    })
    .join('');

  if (pagerStatus) {
    pagerStatus.textContent = `${filteredPopes.length} / ${getTotalPages()}`;
  }
}

function setActiveMode(mode) {
  searchMode.value = mode;
  filterButtons.forEach((button) => {
    const isActive = button.dataset.mode === mode;
    button.classList.toggle('is-active', isActive);
  });
  renderPopes(searchInput ? searchInput.value : '');
}

if (popeResults) {
  renderPopes();
}

if (searchInput) {
  searchInput.addEventListener('input', (event) => renderPopes(event.target.value));
}

if (voiceSearchButton) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    voiceSearchButton.disabled = true;
    voiceSearchButton.title = 'البحث الصوتي غير مدعوم في هذا المتصفح';
    voiceSearchButton.querySelector('span:last-child').textContent = 'غير مدعوم';
  } else {
    const recognition = new SpeechRecognition();
    let recognitionTimeout;
    recognition.lang = 'ar-EG';
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    recognition.addEventListener('start', () => {
      clearTimeout(recognitionTimeout);
      recognitionTimeout = setTimeout(() => recognition.abort(), 7000);
      voiceSearchButton.classList.add('is-listening');
      voiceSearchButton.querySelector('span:last-child').textContent = 'استمع الآن...';
    });

    recognition.addEventListener('result', (event) => {
      const result = event.results[event.results.length - 1];
      if (!result || !result.isFinal) return;

      clearTimeout(recognitionTimeout);
      recognition.stop();
      const transcript = result[0].transcript.trim();
      if (!searchInput || !transcript) return;
      searchInput.value = transcript;
      searchInput.dispatchEvent(new Event('input', { bubbles: true }));
    });

    recognition.addEventListener('error', (event) => {
      if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
        voiceSearchButton.title = 'اسمح للمتصفح باستخدام الميكروفون للبحث صوتيًا';
      }
    });

    recognition.addEventListener('end', () => {
      clearTimeout(recognitionTimeout);
      voiceSearchButton.classList.remove('is-listening');
      voiceSearchButton.querySelector('span:last-child').textContent = 'بحث صوتي';
    });

    voiceSearchButton.addEventListener('click', () => {
      try {
        recognition.start();
      } catch (error) {
        if (error.name !== 'InvalidStateError') throw error;
      }
    });
  }
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => setActiveMode(button.dataset.mode));
});

if (resetFiltersButton) {
  resetFiltersButton.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    setActiveMode('all');
    sortDescending = false;
    if (sortToggleButton) sortToggleButton.textContent = 'ترتيب: التاريخي';
    renderPopes('');
  });
}

if (randomPopeButton) {
  // Dice-roll cube: visual 3D die roll that selects a pope
  randomPopeButton.addEventListener('click', () => {
    if (!Array.isArray(popeData) || !popeData.length) return;

    randomPopeButton.disabled = true;

    // create overlay with cube
    const overlay = document.createElement('div');
    overlay.className = 'dice-roll';
    overlay.innerHTML = `
      <div class="dice-cube">
        <div class="cube" id="diceCube">
          <div class="face face1">1</div>
          <div class="face face2">2</div>
          <div class="face face3">3</div>
          <div class="face face4">4</div>
          <div class="face face5">5</div>
          <div class="face face6">6</div>
        </div>
      </div>
      <div class="value">—</div>
      <div class="label">جاري رمي النرد واختيار بطريرك...</div>
    `;
    document.body.appendChild(overlay);

    const cube = overlay.querySelector('#diceCube');
    const valueEl = overlay.querySelector('.value');

    // choose final pope index and map to a die face (1..6)
    const finalIndex = Math.floor(Math.random() * popeData.length);
    const finalPope = popeData[finalIndex];
    const faceNumber = (finalIndex % 6) + 1; // map into 1..6

    // show rapid name cycling while cube rolls
    let cycle = null;
    const intervalMs = 90;
    cycle = setInterval(() => {
      const idx = Math.floor(Math.random() * popeData.length);
      const p = popeData[idx];
      valueEl.textContent = `${p.name} • #${p.id}`;
    }, intervalMs);

    // start cube rolling animation
    cube.classList.add('rolling');

    const rollDuration = 1800; // ms
    setTimeout(() => {
      // stop name cycling
      clearInterval(cycle);

      // remove rolling animation and set final cube orientation to show faceNumber
      cube.classList.remove('rolling');

      // final orientation for each face (so face N shows front)
      const faceTransforms = {
        1: 'rotateX(0deg) rotateY(0deg) translateZ(-48px)',
        2: 'rotateX(0deg) rotateY(180deg) translateZ(-48px)',
        3: 'rotateX(0deg) rotateY(90deg) translateZ(-48px)',
        4: 'rotateX(0deg) rotateY(-90deg) translateZ(-48px)',
        5: 'rotateX(90deg) rotateY(0deg) translateZ(-48px)',
        6: 'rotateX(-90deg) rotateY(0deg) translateZ(-48px)'
      };

      // apply final transform so chosen face is visible
      cube.style.transform = faceTransforms[faceNumber] || faceTransforms[1];

      // show chosen pope name
      valueEl.textContent = `${finalPope.name} • #${finalPope.id}`;

      // update search and render
      if (searchInput) searchInput.value = finalPope.name;
      setActiveMode('all');
      renderPopes(finalPope.name);

      // after a short moment, highlight and scroll to card
      setTimeout(() => {
        const cards = Array.from(document.querySelectorAll('.pope-card'));
        let target = null;
        for (const card of cards) {
          const num = card.querySelector('.pope-number');
          if (num && num.textContent.includes(`#${finalPope.id}`)) { target = card; break; }
          const h3 = card.querySelector('h3');
          if (h3 && h3.textContent.trim() === finalPope.name) { target = card; break; }
        }
        if (target) {
          target.classList.add('highlight');
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(() => target.classList.remove('highlight'), 3600);
        }

        // remove overlay and re-enable button
        setTimeout(() => {
          if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
          randomPopeButton.disabled = false;
        }, 900);
      }, 160);
    }, rollDuration);
  });
}

if (sortToggleButton) {
  sortToggleButton.addEventListener('click', () => {
    sortDescending = !sortDescending;
    sortToggleButton.textContent = sortDescending ? 'ترتيب: الأحدث أولًا' : 'ترتيب: التاريخي';
    renderPopes(searchInput ? searchInput.value : '');
  });
}

// Local "More info" biography modal
function createMoreInfoModal() {
  if (document.getElementById('moreInfoModal')) return;
  const modal = document.createElement('div');
  modal.id = 'moreInfoModal';
  modal.className = 'more-info-modal';
  modal.innerHTML = `
    <div class="more-info-backdrop">
      <div class="more-info-panel">
        <button class="more-info-close" aria-label="Close">×</button>
        <div class="more-info-content">جاري التحميل...</div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const close = modal.querySelector('.more-info-close');
  close.addEventListener('click', () => { if (modal && modal.parentNode) modal.parentNode.removeChild(modal); });
  // click outside to close
  modal.addEventListener('click', (ev) => { if (ev.target === modal) { if (modal && modal.parentNode) modal.parentNode.removeChild(modal); } });
}

function showMoreInfo(id) {
  const pope = popeData.find((item) => item.id === Number(id));
  if (!pope) return;

  createMoreInfoModal();
  const modal = document.getElementById('moreInfoModal');
  if (!modal) return;
  const contentEl = modal.querySelector('.more-info-content');
  const facts = `<p class="biography-facts">الفترة: ${pope.reign} | الميلاد: ${pope.birth}</p>`;
  const image = pope.image
    ? `<img class="more-info-image" src="${pope.image}" alt="${pope.name}" />`
    : '';
  const story = `<div class="more-info-extract"><h3>قصة الحياة</h3><p>${pope.story}</p></div>`;
  contentEl.innerHTML = `<h2>السيرة الحقيقية لـ ${pope.name}</h2>${image}${facts}${story}`;
}

// delegate click handler for more-info buttons
document.addEventListener('click', (ev) => {
  const imageButton = ev.target.closest && ev.target.closest('.image-view-button');
  if (imageButton) {
    openImageViewer(imageButton.dataset.image, imageButton.dataset.title);
    return;
  }

  const btn = ev.target.closest && ev.target.closest('.more-info-button');
  if (btn) {
    showMoreInfo(btn.dataset.id);
  }
});

function openImageViewer(imageUrl, title) {
  if (!imageUrl) return;

  const viewer = document.createElement('div');
  viewer.className = 'image-viewer';
  viewer.setAttribute('role', 'dialog');
  viewer.setAttribute('aria-modal', 'true');
  viewer.setAttribute('aria-label', title || 'عرض الصورة');
  viewer.innerHTML = `
    <div class="image-viewer-backdrop"></div>
    <div class="image-viewer-panel">
      <div class="image-viewer-toolbar">
        <strong>${title || 'عرض الصورة'}</strong>
        <div class="image-viewer-actions">
          <button type="button" data-action="zoom-out" aria-label="تصغير الصورة">−</button>
          <button type="button" data-action="reset" aria-label="إعادة حجم الصورة">100%</button>
          <button type="button" data-action="zoom-in" aria-label="تكبير الصورة">+</button>
          <button type="button" data-action="close" aria-label="إغلاق">×</button>
        </div>
      </div>
      <div class="image-viewer-stage"><img src="${imageUrl}" alt="${title || 'الصورة'}" /></div>
    </div>
  `;
  document.body.appendChild(viewer);

  const image = viewer.querySelector('img');
  const resetButton = viewer.querySelector('[data-action="reset"]');
  let zoom = 1;
  const updateZoom = () => {
    image.style.transform = `scale(${zoom})`;
    resetButton.textContent = `${Math.round(zoom * 100)}%`;
  };
  const close = () => viewer.remove();

  viewer.addEventListener('click', (event) => {
    const action = event.target.closest('[data-action]')?.dataset.action;
    if (action === 'zoom-in') zoom = Math.min(zoom + 0.25, 3);
    if (action === 'zoom-out') zoom = Math.max(zoom - 0.25, 0.5);
    if (action === 'reset') zoom = 1;
    if (action === 'close' || event.target.classList.contains('image-viewer-backdrop')) close();
    updateZoom();
  });
  viewer.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
    if (event.key === '+' || event.key === '=') zoom = Math.min(zoom + 0.25, 3);
    if (event.key === '-') zoom = Math.max(zoom - 0.25, 0.5);
    updateZoom();
  });
  viewer.querySelector('[data-action="close"]').focus();
}

// Setup animated ripples and press feedback for all interactive buttons/links
(function setupButtonAnimations() {
  const elems = document.querySelectorAll('button, .hero-link');
  if (!elems || !elems.length) return;

  elems.forEach((el) => {
    // Ensure the element is positioned to contain the ripple
    const computed = window.getComputedStyle(el);
    if (computed.position === 'static') el.style.position = 'relative';
    el.style.overflow = 'hidden';

    el.addEventListener('click', (e) => {
      // Create ripple
      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.2;
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = size + 'px';

      // Position ripple so it expands from click point
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      el.appendChild(ripple);

      // small press animation
      el.classList.add('btn-press');
      setTimeout(() => el.classList.remove('btn-press'), 300);

      // remove ripple after animation
      setTimeout(() => {
        if (ripple && ripple.parentNode) ripple.parentNode.removeChild(ripple);
      }, 700);
    });

    // Support keyboard activation for accessibility (Enter / Space)
    el.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 1.2;
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = `${rect.width / 2 - size / 2}px`;
        ripple.style.top = `${rect.height / 2 - size / 2}px`;
        el.appendChild(ripple);
        el.classList.add('btn-press');
        setTimeout(() => el.classList.remove('btn-press'), 300);
        setTimeout(() => {
          if (ripple && ripple.parentNode) ripple.parentNode.removeChild(ripple);
        }, 700);
      }
    });
  });
})();
