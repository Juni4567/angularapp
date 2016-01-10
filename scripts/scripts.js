var myApp = angular
	.module("myModule", []) //creating module
	.controller("myController", function ($scope) {  //Creating and registering controller
	var employee = {
		firstName : "David",
		lastName  : "Hastings",
		gender	  : "male",
	};
	$scope.employee = employee;
});
// 	var myApp = angular.module("myModule", []) //creating module
// 	.controller("myController", function ($scope) {  //Creating and registering controller
// 	var employee = {
// 		firstName : "David",
// 		lastName  : "Hastings",
// 		gender	  : "male",
// 	};
// 	$scope.employee = employee;
// });

