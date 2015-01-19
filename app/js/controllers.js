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
  var today = moment();
  var dateFormat = 'dddd D MMM';
  
  $http.get('data/tasks.json').success(function(tasks) {
    $scope.tasks = new Array();

    // Ugh. All this should go when there's a proper database 
    // and can have the data in a more convenient format.
    var taskLen = tasks.length;
    for (var i = 0; i < taskLen; i++) {
      var dateLen = tasks[i].date.length;
      for (var j = 0; j < dateLen; j++) {
        var taskDate = moment(tasks[i].date[j]);
        if ((taskDate.day() === 0 && today.week() + 1 === taskDate.week()) || 
            (taskDate.day() === 0 && today.day() === 0 && today.week() === taskDate.week()) ||
            (taskDate.day() !== 0 && today.week() === taskDate.week())) {
          var returnTask = {};
          returnTask.date = taskDate;
          returnTask.title = tasks[i].title;
          returnTask.description = tasks[i].description;
          returnTask.time = tasks[i].time;
          $scope.tasks.push(returnTask);
        }
      }
    }

    // Sort the tasks chronologically
    $scope.tasks.sort(function(a, b) {
      if (a.date.isBefore(b.date)) {
        return -1;
      }
      if (a.date.isAfter(b.date)) {
        return 1;
      }
      return 0;
    });

    // Format the dates
    $scope.tasks.map(function(val) {
      val.date = val.date.format(dateFormat);
    });
  });

  
  $scope.orderProp = 'date';

  $scope.weekStart = moment();
  if ($scope.weekStart.day() === 0)
    $scope.weekStart.day(-6)
  else 
    $scope.weekStart.day(1)
  $scope.weekStart = $scope.weekStart.format('Do MMMM YYYY');
  
  $scope.isToday = function (taskDate) {
    var todayDay = today.day();
    var taskDateMoment = moment(taskDate, dateFormat);
    var ret = today.day() === taskDateMoment.day();
    return ret;
  };
}]);

appControllers.controller('BacklogCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('data/tasks.json').success(function(tasks) {
    $scope.backlog = tasks;
  });

  $scope.orderProp = 'title';
}]);
