const $testimonialsSld = $('.js-testimonials-slider');
const $teamSld = $('.js-team-slider');
const $achieveSld = $('.js-achieve-slider');
$testimonialsSld.owlCarousel({
  items: 1,
  loop: true,
  dots: false,
  nav: true,
  navText: ['<svg class="owl-carousel__btn-icon icon-sld-arr_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr_l"></use></svg>', '<svg class="owl-carousel__btn-icon icon-sld-arr_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr_r"></use></svg>'],
  navClass: ['owl-carousel__btn owl-carousel__btn_prev', 'owl-carousel__btn owl-carousel__btn_next']
});
$teamSld.owlCarousel({
  loop: true,
  dots: false,
  nav: true,
  navText: ['<svg class="owl-carousel__btn-icon icon-sld-arr-lg_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr-lg_l"></use></svg>', '<svg class="owl-carousel__btn-icon icon-sld-arr-lg_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr-lg_r"></use></svg>'],
  navClass: ['owl-carousel__btn owl-carousel__btn_prev', 'owl-carousel__btn owl-carousel__btn_next'],
  responsive: {
    0: {
      items: 1
    },
    419: {
      items: 2
    },
    767: {
      items: 2
    },
    1023: {
      items: 3,
      margin: 15
    },
    1365: {
      items: 4,
      margin: 30
    }
  }
});
$achieveSld.owlCarousel({
  items: 3,
  loop: true,
  dots: false,
  nav: true,
  navText: ['<svg class="owl-carousel__btn-icon icon-sld-arr-md_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr-md_l"></use></svg>', '<svg class="owl-carousel__btn-icon icon-sld-arr-md_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr-md_r"></use></svg>'],
  navClass: ['owl-carousel__btn owl-carousel__btn_prev', 'owl-carousel__btn owl-carousel__btn_next'],
  responsive: {
    0: {
      items: 1
    },
    767: {
      items: 2
    },
    1023: {
      items: 3,
      margin: 10
    },
    1365: {
      margin: 30
    }
  }
});