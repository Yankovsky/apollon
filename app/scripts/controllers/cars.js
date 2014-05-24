angular.module('apollonApp')
  .controller('CarsCtrl', function($scope, $http) {
    $http.get('/api/cars').success(function(cars) {
      $scope.cars = cars
    })
  })