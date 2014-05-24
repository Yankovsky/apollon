angular.module('apollonApp')
  .controller('DriversCtrl', function($scope, $http) {
    $http.get('/api/drivers').success(function(drivers) {
      $scope.drivers = drivers
    })
  })