'use strict';

$('.project-blocks').on('click', function(e) {
  e.preventDefault();
  $('.project-descriptions').hide();

  if ($(window).width() >= 600) {
    $('.project-blocks').css('width', '48%');
    $(this).css('width', '98%');
  } else {
    $('.project-blocks').css('width', '98%');
  }

  $(this).children('.project-descriptions').show();
});
