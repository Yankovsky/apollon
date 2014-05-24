angular.module('apollonApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
