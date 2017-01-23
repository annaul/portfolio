'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.load = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos?type=owner',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    }).then(data => {
      repos.all = data;
      console.log(repos.all);
      callback()
    });
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);
  repos.findByName = name => repos.all.find(repo => repo.name == name);

  module.repos = repos;
})(window);
