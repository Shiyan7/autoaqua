import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

document.addEventListener("DOMContentLoaded", () => {
  const burgers = document.querySelectorAll('[data-burger]');
  const menu = document.querySelector('[data-menu]');

  burgers?.forEach(el => {
    el.addEventListener('click', (e) => {
      menu?.classList.toggle('menu--active');

      if (menu?.classList.contains('menu--active')) {
        disableScroll();
      } else {
        enableScroll();
      }
    })
  })
})