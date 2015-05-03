'use strict';

/* Controllers */

var controllers = angular.module('Controllers', []);

controllers.controller('HomeCtrl', ['$scope', 'Translations',
  function($scope, Translations) {
  	console.log('HomeCtrl');
    $scope.menu = ["1", "2"];
    $scope.Translations = Translations.query();
    console.log(Translations.query());
  }]);
