'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);

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
