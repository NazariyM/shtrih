const $testimonialsSld = $('.js-testimonials-slider');
$testimonialsSld.owlCarousel({
  animateOut: 'flipOutY',
  animateIn: 'flipInY',
  items: 1,
  smartSpeed: 450,
  loop: true,
  dots: false,
  nav: true,
  navText: ['<svg class="owl-carousel__btn-icon icon-sld-arr_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr_l"></use></svg>', '<svg class="owl-carousel__btn-icon icon-sld-arr_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr_r"></use></svg>'],
  navClass: ['owl-carousel__btn owl-carousel__btn_prev', 'owl-carousel__btn owl-carousel__btn_next']
});

const $teamSld = $('.js-team-slider');
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

const $achieveSld = $('.js-achieve-slider');
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

const $qualitySld = $('.js-quality-slider');
$qualitySld.owlCarousel({
  animateOut: 'bounceOut',
  animateIn: 'bounceIn',
  items: 1,
  loop: true,
  autoplay: true,
  dots: false,
  nav: true,
  smartSpeed: 1000,
  navText: ['<svg class="owl-carousel__btn-icon icon-sld-arr-lg_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr-lg_l"></use></svg>', '<svg class="owl-carousel__btn-icon icon-sld-arr-lg_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr-lg_r"></use></svg>'],
  navClass: ['owl-carousel__btn owl-carousel__btn_prev', 'owl-carousel__btn owl-carousel__btn_next']
  // responsive: {
  //   0: {
  //     items: 1
  //   },
  //   767: {
  //     items: 2
  //   },
  //   1023: {
  //     items: 3,
  //     margin: 10
  //   },
  //   1365: {
  //     margin: 30
  //   }
  // }
});

const $categoryLinks = $('.js-category-links');
const $categoryView = $('.js-category-view');
$categoryLinks.slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  speed: 200,
  asNavFor: '.js-category-view',
  infinite: false,
  dots: false,
  arrows: true,
  focusOnSelect: true,
  vertical: true,
  draggable: false,
  prevArrow: '<button class="category__list-btn category__list-btn_prev" type="button"><svg class="category__list-btn-icon icon-sld-arr_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr_l"></use></svg></button>',
  nextArrow: '<button class="category__list-btn category__list-btn_next" type="button"><svg class="category__list-btn-icon icon-sld-arr_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr_r"></use></svg></button>'
});
$categoryView.slick({
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.js-category-links',
  infinite: false,
  dots: false,
  arrows: false,
  draggable: false,
  fade: true
});

const $benefitsSld = $('.js-benefits-slider');
$benefitsSld.owlCarousel({
  items: 4,
  loop: true,
  dots: false,
  nav: true,
  margin: 30,
  navText: ['<svg class="owl-carousel__btn-icon icon-sld-arr_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr_l"></use></svg>', '<svg class="owl-carousel__btn-icon icon-sld-arr_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr_r"></use></svg>'],
  navClass: ['owl-carousel__btn owl-carousel__btn_prev', 'owl-carousel__btn owl-carousel__btn_next']
});

const $historyTimeline = $('.js-history-timeline');
$historyTimeline.slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  speed: 1200,
  infinite: false,
  dots: true,
  arrows: false,
  draggable: false,
  dotsClass: 'history-timeline__nav',
  customPaging(slider, i) {
    const title = $(slider.$slides[i]).data('title');
    return `<button type="button" class="history-timeline__nav-year"><span>${title}</span></button>`;
  },
  responsive: [
    {
      breakpoint: 592,
      settings: {
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      //   arrows: true,
      //   prevArrow: '<button class="history-timeline__btn history-timeline__btn_prev" type="button"><svg class="history-timeline__btn-icon icon-sld-arr_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr_l"></use></svg></button>',
      //   nextArrow: '<button class="history-timeline__btn history-timeline__btn_next" type="button"><svg class="history-timeline__btn-icon icon-sld-arr_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr_r"></use></svg></button>'
      }
    }]
});