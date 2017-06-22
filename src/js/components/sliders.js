const $testimonialSld = $('.js-testimonials-slider');
$testimonialSld.owlCarousel({
  items: 1,
  loop: true,
  dots: false,
  nav: true,
  navText: ['<svg class="testimonials__slider-icon icon-sld-arr_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr_l"></use></svg>', '<svg class="testimonials__slider-icon icon-sld-arr_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-sld-arr_r"></use></svg>'],
  navClass: ['testimonials__slider-btn testimonials__slider-btn_prev', 'testimonials__slider-btn testimonials__slider-btn_next']
});