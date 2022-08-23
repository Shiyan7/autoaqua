export class Tabs {
  constructor(selector, options) {
    let defaultOptions = {
      isChanged: () => {}
    }
    this.options = Object.assign(defaultOptions, options);
    this.selector = selector;
    this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
    if (this.tabs) {
      this.tabsDropdown = this.tabs.querySelector('.tabs-dropdown');
      this.tabsDropdownBtn = this.tabs.querySelector('.tabs-dropdown__toggle');
      this.tabList = this.tabs.querySelector('.tabs__nav');
      this.tabsBtns = this.tabList.querySelectorAll('.tabs__nav-btn');
      this.tabsPanels = this.tabs.querySelectorAll('.tabs__panel');
    } else {
      console.error('Селектор data-tabs не существует!');
      return;
    }

    this.check();
    this.init();
    this.events();
  }

  check() {
    if (document.querySelectorAll(`[data-tabs="${this.selector}"]`).length > 1) {
      console.error('Количество элементов с одинаковым data-tabs больше одного!');
      return;
    }

    if (this.tabsBtns.length !== this.tabsPanels.length) {
      console.error('Количество кнопок и элементов табов не совпадает!');
      return;
    }
  }

  init() {
    this.tabsDropdownBtn?.addEventListener("click", e => {

      const target = e.currentTarget.innerHTML;

      const setTarget = (str) => e.currentTarget.innerHTML = str

      target === 'Показать фильтры' ? setTarget('Скрыть фильтры') : setTarget('Показать фильтры')

      this.tabsDropdown.classList.toggle("active")
    })
  }
}