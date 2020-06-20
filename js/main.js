$(document).ready(function() {
  $('.faq li .question').click(function () {
    $(this).find('.plus-minus-toggle').toggleClass('collapsed');
    $(this).parent().toggleClass('active');
  });

});
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
      $('.navbar').fadeIn(200);
    } else {
      $('.navbar').fadeOut(200);
    }
  });

});



