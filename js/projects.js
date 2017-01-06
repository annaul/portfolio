'use strict';

function classProject(title, image, link) {
  this.title = title;
  this.image = image;
  this.link = link;
}

var aboutMe = new classProject('About Me', '/img/app-about-me-sm.jpg', 'https://annaul.github.io/about_me/');
var busMall = new classProject('Bus Mall', '/img/app-busmall-sm.jpg', 'https://annaul.github.io/busmall/');
var cookieStand = new classProject('Cookie Stand', '/img/app-cookie-stand-sm.jpg', 'https://annaul.github.io/cookie-stand/');
var travelSite = new classProject('Travel Site', '/img/app-travel-site-sm.jpg', 'https://shortaj.github.io/Group_Project-Trip-Planner/');

var allProjects = [aboutMe, busMall, cookieStand, travelSite];
