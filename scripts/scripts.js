//creating module for event handler app in ng for like/dislikes
var myApp = angular.module("myApp", [])
//Creating and registering controller
	.controller("eventController", function ($scope) {
		var technologies =[
			{ name: "C#", likes: 50054, dislikes: 0 },
			{ name: "ASP.NET", likes: 54564564, dislikes: 0 },
			{ name: "SQL Server", likes: 0, dislikes: 0 },
			{ name: "AngularJs", likes: 0, dislikes: 0 },
		];
	// name that will be used inside the scope of the controller
	$scope.technologies = technologies;
	$scope.rowLimit = 3;
	$scope.incrementLikes= function(technology){
		technology.likes++;
	}
	$scope.incrementDislikes= function(technology){
		technology.dislikes++;
	}

	
	});



//creating module for event handler app in ng for like/dislikes
var eventApp = angular.module("eventApp", [])
//Creating and registering controller
	.controller("eventController", function ($scope) {
		var technologies =[
			{ name: "C#", likes: 0, dislikes: 0 },
			{ name: "ASP.NET", likes: 0, dislikes: 0 },
			{ name: "SQL Server", likes: 0, dislikes: 0 },
			{ name: "AngularJs", likes: 0, dislikes: 0 },
		];
	// name that will be used inside the scope of the controller
	$scope.technologies = technologies;
	$scope.incrementLikes= function(technology){
		technology.likes++;
	}
	$scope.incrementDislikes= function(technology){
		technology.dislikes++;
	}
	});


//code for countryController
var countryApp = angular.module("countryApp", []) //creating module
	.controller("countryController", function ($scope) {  //Creating and registering controller
		var countries	= [
		{
			name : "United Kingdom",
			cities : [
				{ name : "London"},
				{ name : "Manchester"},
				{ name : "Birmingham"}
			]
		},
		{
			name : "United States",
			cities : [
				{ name : "Los Angeles"},
				{ name : "New York"},
				{ name : "Washington D.C"}
			]
		},
		{
			name : "Pakistan",
			cities : [
				{ name : "Rawalpindi"},
				{ name : "Islamabad"},
				{ name : "Karachi"}
			]
		},
		];
		$scope.countries = countries; // name that will be used inside the scope of the controller
	});

//trying to see if this code interfare with the one above because I renamed the controller and changing the name in the markup as well
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

