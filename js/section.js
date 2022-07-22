'use strict';

// sec2

const sec2 = $('.sec2');
const sec2TxTBox = $('.sec2 .txt-box');

// sec3, sec4, sec5

const sec3 = $('.sec3');
const sec3TxtBox = $('.sec3 .txtCon-box');
const sec3BannerCon = $('.sec3 .banner-con');

const sec4 = $('.sec4');
const sec4TxtBox = $('.sec4 .txtCon-box');

const sec5 = $('.sec5');
const sec5TxtBox = $('.sec5 .txtCon-box');

// event
$(window).scroll(function () {
  if ($(window).scrollTop() >= $(sec2).offset().top) {
    sec2TxTBox.children().eq(0).css('transform', 'translateY(25px)');
    sec2TxTBox.children().eq(2).css('transform', 'translateY(-25px)');
  } else {
    sec2TxTBox.children().eq(0).css('transform', 'translateY(0px)');
    sec2TxTBox.children().eq(2).css('transform', 'translateY(0px)');
  }

  const time = 500;
  if ($(window).scrollTop() >= $(sec3).offset().top - 180) {
    const sec3Children = sec3TxtBox.children();
    sec3Children.eq(0).animate({ opacity: 1 }, time);
    sec3Children.eq(1).animate({ opacity: 1 }, time * 2);
    sec3Children.eq(2).animate({ opacity: 1 }, time * 3);
    sec3Children.eq(3).animate({ opacity: 1 }, time * 4);
  }

  if ($(window).scrollTop() >= $(sec4).offset().top - 180) {
    const sec4Children = sec4TxtBox.children();
    sec4Children.eq(0).animate({ opacity: 1 }, time);
    sec4Children.eq(1).animate({ opacity: 1 }, time * 2);
    sec4Children.eq(2).animate({ opacity: 1 }, time * 3);
    sec4Children.eq(3).animate({ opacity: 1 }, time * 4);
  }

  if ($(window).scrollTop() >= $(sec5).offset().top - 180) {
    const sec5Children = sec5TxtBox.children();
    sec5Children.eq(0).animate({ opacity: 1 }, time);
    sec5Children.eq(1).animate({ opacity: 1 }, time * 2);
    sec5Children.eq(2).animate({ opacity: 1 }, time * 3);
    sec5Children.eq(3).animate({ opacity: 1 }, time * 4);
  }
});

// sec5 bookList background img

const ulBook = $('ul.bookList');
const LiBook = $('ul.bookList>li');

ulBook.each(function (idx, el) {
  ulBook.eq(0).children().eq(idx).css('background', `url(img/index/sec5_books/a_${idx}.png)no-repeat 50%/cover`);
  ulBook.eq(1).children().eq(idx).css('background', `url(img/index/sec5_books/b_${idx}.png)no-repeat 50%/cover`);
  ulBook.eq(2).children().eq(idx).css('background', `url(img/index/sec5_books/c_${idx}.png)no-repeat 50%/cover`);
  ulBook.eq(3).children().eq(idx).css('background', `url(img/index/sec5_books/d_${idx}.png)no-repeat 50%/cover`);
});

// sec1
// 1. 이제 금성이~

const sec1 = $('.sec1');
const fstTxt = $('.fst-display');
const secTxt = $('.sec-display');
const figure = $('.figure');
const line = $('.line');

$(window).ready(function () {
  fstTxt.animate({ opacity: '0.5', marginTop: '0px' }, 1500);
  fstTxt.animate({ opacity: '0', marginTop: '-150px' }, 1500, function () {
    line.animate({ opacity: '1' }, 1500, function () {
      figureShowFunc();
    });
  });
});

function figureShowFunc() {
  const time = 1000;
  figure.eq(6).animate({ opacity: '1' }, time);
  figure.eq(5).animate({ opacity: '1' }, time + 200);
  figure.eq(4).animate({ opacity: '1' }, time, function () {
    figure.eq(3).animate({ opacity: '1' }, time);
    figure.eq(2).animate({ opacity: '1' }, time);
    figure.eq(1).animate({ opacity: '1' }, time, function () {
      secTxt.animate({ opacity: '1' }, 1500, function () {
        secTxt.children().eq(0).animate({ paddingBottom: '0' }, 1000);
        secTxt.children().eq(1).animate({ paddingTop: '0' }, 1000);
        figure.eq(7).animate({ opacity: '1' }, time);
        figure.eq(8).animate({ opacity: '1' }, time);
        figure.eq(0).animate({ opacity: '1' }, time, function () {
          figure.css('filter', 'unset');
        });
      });
    });
  });
}
