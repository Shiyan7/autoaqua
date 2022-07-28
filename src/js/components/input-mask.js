import Inputmask from 'inputmask';

document.addEventListener('DOMContentLoaded', () => {
  const telSelectors = document.querySelectorAll('.mask-input');
  const inputMask = new Inputmask('+7 (999) 999-99-99');

  telSelectors.forEach(el => {
    inputMask.mask(el);
  })
})