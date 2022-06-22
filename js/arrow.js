'use strict';

// arrow js
const arrow = $('.top-arrow');

$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    arrow.css('opacity', '1');
  } else {
    arrow.css('opacity', '0');
  }
});

arrow.on('click', function () {
  $('html').animate({ scrollTop: 0 }, 1000);
});
