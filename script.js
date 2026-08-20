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
  randomPopeButton.addEventListener('click', () => {
    if (!Array.isArray(popeData) || !popeData.length) return;
    const randomPope = popeData[Math.floor(Math.random() * popeData.length)];
    if (searchInput) searchInput.value = randomPope.name;
    setActiveMode('all');
    renderPopes(randomPope.name);
  });
}

if (sortToggleButton) {
  sortToggleButton.addEventListener('click', () => {
    sortDescending = !sortDescending;
    sortToggleButton.textContent = sortDescending ? 'ترتيب: الأحدث أولًا' : 'ترتيب: التاريخي';
    renderPopes(searchInput ? searchInput.value : '');
  });
}
