const BODY = $('body');
const WIN = $(window);

// detect touch device
function isTouchDevice() {
  return 'ontouchstart' in window;
}
if (!isTouchDevice()) {
  BODY.addClass('no-touch');
}

// clear placeholder
(function() {
  const el = $('input, textarea');
  el.focus(function() {
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');
  });
  el.blur(function() {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });
}());