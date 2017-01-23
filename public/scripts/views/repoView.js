'use strict';

(function(module) {
  const repoView = {};
  const ui = function() {
    let $about = $('#about');
    $about.find('ul').empty();
  };

  const render = Handlebars.compile($("#project-template").html());

  repoView.index = function() {
    ui();

    $('#about ul').append(
      repos.with('has_pages').map(render) 
    );
  };

  module.repoView = repoView;
})(window);
