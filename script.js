const formEl = document.querySelector('.filter-form');
const filterBtnEl = document.querySelector('.filter-button');

filterBtnEl.addEventListener('click', () => {
    formEl.classList.toggle('filter-form_show');
});