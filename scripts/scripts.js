
var myApp = angular.module("myModule", []);

var myController = function ($scope) {
	$scope.message = "Angular Tutorial";
};
myApp.controller("myController", myController);