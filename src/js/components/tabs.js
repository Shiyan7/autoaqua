document.addEventListener("DOMContentLoaded", () => {

  const tabsDropdownBtn = document.querySelector('.tabs-dropdown__toggle');
  const tabsDropdown = document.querySelector('.tabs-dropdown');

  tabsDropdownBtn?.addEventListener("click", e => {

    const target = e.currentTarget.innerHTML;

    const setTarget = (str) => e.currentTarget.innerHTML = str

    target === 'Показать фильтры' ? setTarget('Скрыть фильтры') : setTarget('Показать фильтры')

    tabsDropdown.classList.toggle("active")
  })
})