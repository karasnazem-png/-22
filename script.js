const popeResults = document.getElementById('popeResults');
const pagerStatus = document.getElementById('pagerStatus');
const searchInput = document.getElementById('searchInput');
const resetFiltersButton = document.getElementById('resetFilters');
const randomPopeButton = document.getElementById('randomPope');
const sortToggleButton = document.getElementById('sortToggle');
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
    .map(
      (pope) => `
    <article class="pope-card">
      <img src="${pope.image}" alt="${pope.name}" />
      <div class="pope-card-body">
        <div class="pope-card-top">
          <span class="pope-number">#${pope.id}</span>
          <span class="pope-tag">${pope.reign}</span>
        </div>
        <h3>${pope.name}</h3>
        <p class="pope-meta">المدة: ${pope.reign}</p>
        <p>الميلاد: ${pope.birth}</p>
        <p>${pope.story}</p>
        ${pope.source ? `<p class="pope-site">مصدر خارجي: <a href="${pope.source}" target="_blank" rel="noopener">عرض السيرة الحقيقية</a></p>` : ''}
        <a class="detail-link" href="details.html?id=${pope.id}">قراءة السيرة كاملة</a>
      </div>
    </article>
  `
    )
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
    console.log('randomPope clicked');
    try { alert('RNG dice roll triggered — if you see this, the handler is running.'); } catch (e) { console.log('alert failed', e); }
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
