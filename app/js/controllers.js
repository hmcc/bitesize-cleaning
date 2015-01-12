'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.isActive = function (viewLocation) {
    var locationPath = $location.path();
    return viewLocation === locationPath;
  };
}]);

appControllers.controller('TaskListCtrl', ['$scope', '$http', 'moment', function($scope, $http, moment) {
  var today = moment().format('YYYY-MM-DD');
  $http.get('data/tasks.json').success(function(tasks) {
    $scope.tasks = tasks.filter(function(task) {
      return $.inArray(today, task.date) >= 0
    });
  });

  $scope.orderProp = 'title';

  $scope.today = moment().format('Do MMMM YYYY');
}]);

appControllers.controller('BacklogCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('data/tasks.json').success(function(tasks) {
    $scope.backlog = tasks;
  });

  $scope.orderProp = 'title';
}]);
