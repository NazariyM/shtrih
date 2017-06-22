const BODY = $('body');
const WIN = $(window);

// detect touch device
function isTouchDevice() {
  return 'ontouchstart' in window;
}
if (!isTouchDevice()) {
  BODY.addClass('no-touch');
}