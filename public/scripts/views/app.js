'use strict';

var allProjects = [];

$.getJSON('/projects.json', function(data){
  data.forEach(function(p) {
    allProjects.push(new classProject(p.title, p.image, p.link, p.text));
  });
});

var initializeListener = function() {
  $('.project-blocks').on('click', function(e) {
    e.preventDefault();
    $('.project-descriptions').hide();

    $(this).css('width','98%');
    $(this).children('.project-descriptions').show();

  });
};

var progectsRender = function() {

  allProjects.forEach(function(a){
    $('.content-placeholder').append(a.toHtml());
  });

};
