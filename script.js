const popeResults = document.getElementById('popeResults');
const pagerStatus = document.getElementById('pagerStatus');
const searchInput = document.getElementById('searchInput');

const getTotalPages = () => (Array.isArray(popeData) ? popeData.length : 0);

function renderPopes(filterText = '') {
  if (!popeResults || typeof popeData === 'undefined') return;

  const query = filterText.trim().toLowerCase();
  const filteredPopes = query
    ? popeData.filter((pope) => {
        return (
          pope.name.toLowerCase().includes(query) ||
          pope.reign.toLowerCase().includes(query) ||
          pope.story.toLowerCase().includes(query) ||
          String(pope.id).includes(query)
        );
      })
    : popeData;

  if (!filteredPopes.length) {
    popeResults.innerHTML = '<p class="no-results">لم يتم العثور على بطريرك مطابق.</p>';
    if (pagerStatus) pagerStatus.textContent = `0 / ${totalPages}`;
    return;
  }

  popeResults.innerHTML = filteredPopes
    .map(
      (pope) => `
    <article class="pope-card">
      <img src="${pope.image}" alt="${pope.name}" />
      <h3>${pope.id}. ${pope.name}</h3>
      <p class="pope-meta">المدة: ${pope.reign}</p>
      <p>الميلاد: ${pope.birth}</p>
      <p>${pope.story}</p>
      ${pope.source ? `<p class="pope-site">مصدر خارجي: <a href="${pope.source}" target="_blank" rel="noopener">عرض السيرة الحقيقية</a></p>` : ''}
      <a class="detail-link" href="details.html?id=${pope.id}">قراءة السيرة كاملة</a>
    </article>
  `
    )
    .join('');

  if (pagerStatus) {
    pagerStatus.textContent = `${filteredPopes.length} / ${getTotalPages()}`;
  }
}

if (popeResults) {
  renderPopes();
}

if (searchInput) {
  searchInput.addEventListener('input', (event) => renderPopes(event.target.value));
}
