var myApp = angular.module("myModule", []) //creating module
	.controller("myController", function ($scope) {  //Creating and registering controller
	var countryInfo = {
		name 	: "Pakistan",
		capital	: "Islamabad",
		flag	: "images/flag-pk.GIF",
	}
	$scope.countryInfo = countryInfo;
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

