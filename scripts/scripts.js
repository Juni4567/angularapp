var myApp = angular.module("myModule", []) //creating module
	.controller("myController", function ($scope) {  //Creating and registering controller
		var employees = [
		{ firstName : "Junaid", lastName : "Anwar", gender : "Male", salary : 10000},
		{ firstName : "Jawad", lastName : "Anwar", gender : "Male", salary : 2000},
		{ firstName : "Hammad", lastName : "Anwar", gender : "Male", salary : 5000},
		{ firstName : "Junaid", lastName : "Anwar", gender : "Male", salary : 10000},
		{ firstName : "Junaid", lastName : "Anwar", gender : "Male", salary : 10000}
		];

		$scope.employees = employees; // name that will be used inside the scope of the controller
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

