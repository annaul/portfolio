'use strict';


(function(module) {
  const projectsModel = {};

  projectsModel.all = [];

  function classProject(name, title, image, link, text) {
    this.name = name;
    this.title = title;
    this.image = image;
    this.link = link;
    this.text = text;
  }

  projectsModel.load = function(callback) {
    $.getJSON('/projects.json', (data) => {
      projectsModel.all = data.map((p) => (
        new classProject(p.name, p.title, p.image, p.link, p.text)
      ));
      repos.load(() => {
        projectsModel.all.map((p) => {
          const repo = repos.findByName(p.name);
          if (repo) {
            p.repo = repo;
          }
        });
        callback();
      })
    });
  };

  module.projectsModel = projectsModel;
})(window);
