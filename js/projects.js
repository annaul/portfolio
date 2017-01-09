'use strict';

function classProject(title, image, link, text) {
  this.title = title;
  this.image = image;
  this.link = link;
  this.text = text;
}

var aboutMe = new classProject(
  'About Me',
  '/img/app-about-me-sm.jpg',
  'https://annaul.github.io/about_me/',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habent enim et bene longam et satis litigiosam disputationem. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Eiuro, inquit adridens, iniquum, hac quidem de re; Que Manilium, ab iisque M.'
);
var busMall = new classProject(
  'Bus Mall',
  '/img/app-busmall-sm.jpg',
  'https://annaul.github.io/busmall/',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habent enim et bene longam et satis litigiosam disputationem. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Eiuro, inquit adridens, iniquum, hac quidem de re; Que Manilium, ab iisque M.'
);
var cookieStand = new classProject(
  'Cookie Stand',
  '/img/app-cookie-stand-sm.jpg',
  'https://annaul.github.io/cookie-stand/',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habent enim et bene longam et satis litigiosam disputationem. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Eiuro, inquit adridens, iniquum, hac quidem de re; Que Manilium, ab iisque M.'
);
var travelSite = new classProject('Travel Site', '/img/app-travel-site-sm.jpg', 'https://shortaj.github.io/Group_Project-Trip-Planner/',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habent enim et bene longam et satis litigiosam disputationem. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Eiuro, inquit adridens, iniquum, hac quidem de re; Que Manilium, ab iisque M.'
);

var allProjects = [aboutMe, busMall, cookieStand, travelSite];

classProject.prototype.toHtml = function() {

  var templateScript = $('#project-template').html();
  var template = Handlebars.compile(templateScript);
  var compiledHtml = template(this);

  return compiledHtml;
};

allProjects.forEach(function(a){
  $('.content-placeholder').append(a.toHtml());
});
