import Swiper, { Navigation, Thumbs } from 'swiper';

const modalSliderNav = new Swiper('.modal-slider__nav', {
  slidesPerView: 'auto',
  spaceBetween: 6,
})

new Swiper('.modal-slider__main', {
  modules: [Navigation, Thumbs],
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    prevEl: '.modal-slider__btn--prev',
    nextEl: '.modal-slider__btn--next',
  },
  thumbs: {
    swiper: modalSliderNav,
  }
})