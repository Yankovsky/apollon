angular.module('apollonApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]).config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/dashboard',
        controller: 'DashboardCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/settings', {
        templateUrl: 'partials/settings',
        controller: 'SettingsCtrl'
      })
      .when('/cars', {
        templateUrl: 'partials/cars',
        controller: 'CarsCtrl'
      })
      .when('/drivers', {
        templateUrl: 'partials/drivers',
        controller: 'DriversCtrl'
      })
      .when('/users', {
        templateUrl: 'partials/users',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
      
    $locationProvider.html5Mode(true)

    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login')
          }
          return $q.reject(response)
        }
      }
    })
  })
  .run(function ($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function () {
      if (!Auth.isLoggedIn())
        $location.path('/login')
    })
  })