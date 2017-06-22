(function initSectionScroll() {
  const $nextSectionScroll = $('.js-next-section');
  $nextSectionScroll.append('<button class="next-section" type="button"><svg class="icon-mouse-down next-section__icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-mouse-down"></use></svg></button>');
  $nextSectionScroll.on('click', '.next-section', function(e) {
    e.preventDefault();
    const $closestSect = $(this).parent($nextSectionScroll).next().offset().top;
    $('html, body').animate({ scrollTop: $closestSect }, '300');
  });
}());
