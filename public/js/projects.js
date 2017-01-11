'use strict';

function classProject(title, image, link, text) {
  this.title = title;
  this.image = image;
  this.link = link;
  this.text = text;
}

classProject.prototype.toHtml = function() {

  var templateScript = $('#project-template').html();
  var template = Handlebars.compile(templateScript);
  var compiledHtml = template(this);

  return compiledHtml;
};
