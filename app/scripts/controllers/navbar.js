angular.module('apollonApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      title: 'Dashboard',
      link: '/'
    }, {
      title: 'Cars',
      link: '/cars'
    }, {
      title: 'Drivers',
      link: '/drivers'
    }, {
      title: 'Users',
      link: '/users'
    }, {
      title: 'Settings',
      link: '/settings'
    }]
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login')
      })
    }
    
    $scope.isActive = function(route) {
      return route === $location.path()
    }
  })