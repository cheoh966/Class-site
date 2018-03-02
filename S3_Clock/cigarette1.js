$(document).ready(function() {
  $('.btn-smoke').click(function() {
    $('.burn').show();
    $('.tobacco').animate({
      width: "0cm"
    }, 10000);
    $('.burn').animate({
      left: "0cm"
    }, 10000, function() {
      $(this).fadeOut();
      $('.btn-reset').css("display", "inline-block");
    });
  });
  
  $('.btn-reset').click(function() {
    $('.btn-reset').hide();
    $('.tobacco').css("width", "5.5cm");
    $('.burn').css("left", "208px");
  });
});