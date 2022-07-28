import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

new Swiper('.hero-slider', {
  modules: [Navigation, Pagination, Scrollbar, Autoplay],
  autoplay: {
    delay: 2500
  },
  navigation: {
    prevEl: '.hero-slider__btn--prev',
    nextEl: '.hero-slider__btn--next',
  },
  scrollbar: {
    el: '.hero-slider__scrollbar',
  },
  pagination: {
    el: '.hero-slider__pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' + currentClass + '"></span>' +
        ' / ' +
        '<span class="' + totalClass + '"></span>'
      );
    }
  }
})