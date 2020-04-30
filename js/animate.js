$(function(){
  var card_1 = $('#card-1');
  var card_2 = $('#card-2');
  var card_3 = $('#card-3');
  var card_4 = $('#card-4');
  var card_5 = $('#card-5');
  var card_6 = $('#card-6');  
  
  if ( $(window).width() < 1200 && $(window).width() > 768) {
      card_1.attr('data-wow-delay', "0.5s");
      card_1.css('animation-delay', '0.5s');

      card_2.attr('data-wow-delay', "0.6s");
      card_2.css('animation-delay', '0.6s');

      card_3.attr('data-wow-delay', "0.1s");
      card_3.css('animation-delay', '0.1s');

      card_4.attr('data-wow-delay', "0.2s");
      card_4.css('animation-delay', '0.2s');

      card_5.attr('data-wow-delay', "0.1s");
      card_5.css('animation-delay', '0.1s');

      card_6.attr('data-wow-delay', "0.2s");
      card_6.css('animation-delay', '0.2s');
  } else if ( $(window).width() < 768) {
    card_1.attr('data-wow-delay', "0.5s");
    card_1.css('animation-delay', '0.5s');

    card_2.attr('data-wow-delay', "0.1s");
    card_2.css('animation-delay', '0.1s');

    card_3.attr('data-wow-delay', "0.1s");
    card_3.css('animation-delay', '0.1s');

    card_4.attr('data-wow-delay', "0.1s");
    card_4.css('animation-delay', '0.1s');

    card_5.attr('data-wow-delay', "0.1s");
    card_5.css('animation-delay', '0.1s');

    card_6.attr('data-wow-delay', "0.1s");
    card_6.css('animation-delay', '0.1s');
  }
});