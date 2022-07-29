import Swiper, { Navigation, Thumbs } from 'swiper';

const modalsSlider = document.querySelectorAll(".modal-slider");

modalsSlider.forEach(el => {

  const main = el.querySelector(".modal-slider__main")
  const nav = el.querySelector(".modal-slider__nav")
  const prevEl = el.querySelector(".modal-slider__btn--prev")
  const nextEl = el.querySelector(".modal-slider__btn--next")

  const modalSliderNav = new Swiper(nav, {
    slidesPerView: 'auto',
    spaceBetween: 6,
  })

  new Swiper(main, {
    modules: [Navigation, Thumbs],
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {prevEl, nextEl},
    thumbs: {
      swiper: modalSliderNav,
    }
  })
})