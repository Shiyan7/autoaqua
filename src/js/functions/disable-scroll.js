import vars from '../_vars';

export const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const paddingOffset = `${(window.innerWidth - vars.bodyEl.offsetWidth)}px`;
  fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
  vars.bodyEl.classList.add('dis-scroll');
}