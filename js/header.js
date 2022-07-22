'use strict';

const header = $('header');
const gnbMain = $('.mainCate');
const gnbSub = $('.subCate');

header.hover(
  function () {
    if ($(window).width() > 600) {
      header.addClass('headerOpen');
    } else return false;
  },
  function () {
    header.removeClass('headerOpen');
  }
);

const mobileBurger = $('.mobile-burger');
mobileBurger.click(function () {
  console.log('h2');
});
