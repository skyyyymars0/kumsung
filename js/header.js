'use strict';

const header = $('header');
const gnbMain = $('.mainCate');
const gnbSub = $('.subCate');

header.hover(
  function () {
    header.addClass('headerOpen');
  },
  function () {
    header.removeClass('headerOpen');
  }
);
