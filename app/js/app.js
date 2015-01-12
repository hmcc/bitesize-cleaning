'use strict';

/* App Module */

var agileCleaningApp = angular.module('agileCleaningApp', [
  'angularMoment',
  'ngRoute',
  'appControllers'
]);

agileCleaningApp.config(['$routeProvider', function($routeProvider) {
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
