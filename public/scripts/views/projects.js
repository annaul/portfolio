'use strict';

(function(module) {
  const projectsView = {};

  projectsView.renderProjects = function(projects) {
    const templateScript = $('#project-template').html();
    const template = Handlebars.compile(templateScript);
    projects.map(function(project) {
      $('.content-placeholder').append(template(project));
    });
  };

  projectsView.initializeListener = function() {
    $('.project-blocks').on('click', function(e) {
      e.preventDefault();

      $('.project-blocks').css('width', '');
      $('.project-descriptions').hide();

      $(this).css('width','98%');
      $(this).children('.project-descriptions').show();
    });
  };

  module.projectsView = projectsView;
})(window);
