'use strict';

(function(module) {
  const projectsController = {};
  projectsController.index = () => {
    projectsModel.load(() => {
      projectsView.renderProjects(projectsModel.all);
      projectsView.initializeListener();
    });
  };
  module.projectsController = projectsController;
})(window);
