'use strict';

classProject.prototype.toHtml = function() {
  var $newProject = $('div.template').clone().removeClass('template');
  $newProject.find('img').attr('src', this.image).css({'width' : '98%' });
  return $newProject;
};

allProjects.forEach(function(project){
  $('.projects').append(project.toHtml());
});
