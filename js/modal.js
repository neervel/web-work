$(function(){
  var callMeBtn = $('#call-me'),
    callMe = $('#modal-callme'),
    close = $('#close'),
    up = $('#up');

  callMeBtn.on('click', function(){
    callMe.fadeIn(100);
    callMe.css('display', 'flex');
  });

  close.on('click', function(){
    $(this).parent().parent().fadeOut(100);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
        up.fadeIn(500);
    } else {
        up.fadeOut(500);
    }
  }); 
  up.on('click', function(){
    console.log('d');
    $('html, body').animate({"scrollTop":0},"slow");
  });
});