import Swiper, { Navigation, Scrollbar } from 'swiper';

new Swiper('.services-slider', {
  modules: [Navigation, Scrollbar],
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {

    577: {
      slidesPerView: 'auto',
    },

    769: {
      slidesPerView: 'auto',
    },

    1025: {
      slidesPerView: 4,
    },
  },
  navigation: {
    prevEl: '.services-slider__btn--prev',
    nextEl: '.services-slider__btn--next',
  },
  scrollbar: {
    el: '.services-slider__scrollbar',
  },
})