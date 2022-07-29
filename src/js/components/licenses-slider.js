import Swiper, { Navigation, Scrollbar } from 'swiper';

new Swiper('.licenses-slider', {
  modules: [Navigation, Scrollbar],
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    577: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 4,
    }
  },
  navigation: {
    prevEl: '.licenses-slider__btn--prev',
    nextEl: '.licenses-slider__btn--next',
  },
  scrollbar: {
    el: '.licenses-slider__scrollbar',
  }
})