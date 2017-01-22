'use strict';

(function(module) {
  const projectsController = {};
  projectsController.index = () => {
    $.getJSON('/projects.json', (data) => {
      const allProjects = data.map((p) => (
        new classProject(p.title, p.image, p.link, p.text)
      ));
      projectsView.renderProjects(allProjects);
      projectsView.initializeListener();
    });
  };
  module.projectsController = projectsController;
})(window);
