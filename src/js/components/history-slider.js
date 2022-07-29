import Swiper, { Navigation, Scrollbar } from 'swiper';

new Swiper('.history-slider', {
  modules: [Navigation, Scrollbar],
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  breakpoints: {
    577: {
      spaceBetween: 20
    }
  },
  navigation: {
    prevEl: '.history-slider__btn--prev',
    nextEl: '.history-slider__btn--next',
  },
  scrollbar: {
    el: '.history-slider__scrollbar',
  }
})