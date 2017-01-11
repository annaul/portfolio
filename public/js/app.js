'use strict';

var initializeListener = function() {
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
};

var allProjects = [];

$.getJSON('/projects.json', function(data){
  data.forEach(function(p) {
    allProjects.push(new classProject(p.title, p.image, p.link, p.text));
  });
  allProjects.forEach(function(a){
    $('.content-placeholder').append(a.toHtml());
  });
  initializeListener();
});
