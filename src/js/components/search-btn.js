const searchEl = document.querySelector('.js-search');
const searchBtn = searchEl.querySelector('.js-search-button');
const searchInput = searchEl.querySelector('.js-search-input');

searchBtn.addEventListener('click', () => {
  searchEl.classList.toggle('search--open');
})
