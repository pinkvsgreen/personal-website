'use strict';

/* App Module */

var app = angular.module('myApp', [
  'ngRoute',
  'Controllers',
  'Filters',
  'Services'
]);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
    .when("/", { templateUrl: "partials/home.html", controller: "HomeCtrl" })
	.when("/home", { templateUrl: "partials/home.html", controller: "HomeCtrl" })
    // Pages
    .when("/work", { templateUrl: "partials/work.html", controller: "PageCtrl" })

    .when("/experiences", { templateUrl: "partials/experiences.html", controller: "PageCtrl" })
    .when("/blog", { templateUrl: "partials/blog.html", controller: "PageCtrl" })
    .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })

    // else 404
    .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });
} ]);


app.controller('PageCtrl', function ( $scope/*, $location, $http */) {
    console.log("Page Controller reporting for duty.");
    $scope.pageClass = 'page-effect';

});
