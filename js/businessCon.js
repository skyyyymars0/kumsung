// business floating-con

const bannerCon = $('ul.banner-con');
$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    bannerCon.css('opacity', '1');
    bannerCon.children().eq(0).css({
      transform: 'translateY(40px)',
    });
    bannerCon.children().eq(1).css({
      transform: 'translateY(20px)',
    });
  } else if ($(this).scrollTop() < 400) {
    bannerCon.css({ opacity: '0' });
    bannerCon.children().eq(0).css({
      transform: 'translateY(20px)',
    });
    bannerCon.children().eq(1).css({
      transform: 'translateY(10px)',
    });
  }
});

//  number js

// const sec4 = $('section.sec4');
// const sec5Li = $('section.sec5 ul.ani-box>li');

// const maxNum = 783;
// let now = 1;

// function timeCounter() {
//   const num = setInterval(numberCount, 0.1);

//   function numberCount() {
//     now++;

//     if (now <= maxNum) {
//       sec5Li.children().eq(1).html(` <p class="num">${now}<span>명</span></p> `);
//     } else {
//       clearInterval(num);
//     }
//   }
// }

// $(window).scroll(function () {
//   if ($(this).scrollTop() >= sec4.offset().top) {
//     timeCounter();
//   }
// });

// sec5Li.children().eq(1).html($(` <p class="num">1,846,783<span>명</span></p>`));
