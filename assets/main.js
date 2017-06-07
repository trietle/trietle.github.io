jQuery(function() {
  $("a[rel~=popover], .has-popover").popover();
  return $("a[rel~=tooltip], .has-tooltip").tooltip();
});

$(document).ready(function() {
  $(window).scroll(function() {
    var scroll_pos;
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 100) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
    return false;
  });
  return $('#toTop').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 700);
    return false;
  });
});
