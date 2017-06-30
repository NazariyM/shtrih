(function initSectionScroll() {
  const $nextSectionScroll = $('.js-next-section');
  $nextSectionScroll.append('<button class="next-section" type="button"><svg class="icon-mouse-down next-section__icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-mouse-down"></use></svg></button>');
  $nextSectionScroll.on('click', '.next-section', function (e) {
    e.preventDefault();
    const $closestSect = $(this).parent($nextSectionScroll).next().offset().top;
    $('html, body').animate({scrollTop: $closestSect}, '300');
  });
}());

(function initMenuToggle() {
  const $menuBtn = $('.js-nav-toggle');
  const $menu = $menuBtn.next().find('.nav');
  const BODY = $('body');
  $menuBtn.on('click', function (ev) {
    ev.preventDefault();
    const $this = $(this);
    $this.toggleClass('is-active');
    $menu.toggleClass('is-open');
    if (!BODY.hasClass('is-locked')) {
      BODY.addClass('is-locked');
    } else {
      setTimeout(() => {
        BODY.removeClass('is-locked');
      }, 350);
    }
  });
}());

const $textOverflow = $('.js-dot');
$textOverflow.dotdotdot();