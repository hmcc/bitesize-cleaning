'use strict';

/* App Module */

var bitesizeCleaningApp = angular.module('bitesizeCleaningApp', [
  'angularMoment',
  'ngRoute',
  'appControllers'
]);

bitesizeCleaningApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: 'TaskListCtrl'
  }).when('/backlog', {
    templateUrl: 'partials/backlog.html',
    controller: 'BacklogCtrl'
  }).otherwise({
    redirectTo: '/'
  });
}]);
