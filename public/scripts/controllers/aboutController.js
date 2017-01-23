'use strict';

(function(module) {
  const aboutController = {};
  aboutController.show = function() {
    $('.project-blocks').hide();
    $('#about').show();
  };
  module.aboutController = aboutController;
})(window);
