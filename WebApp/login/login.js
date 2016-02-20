var app = angular.module("medxport", ["firebase"]);
var dat;

app.factory("Auth", ["$firebaseAuth",
	function($firebaseAuth) {
		var ref = new Firebase("https://medxport.firebaseio.com");
		return $firebaseAuth(ref);
	}
	]);

app.factory('userDat', function() {
	console.log("does work");
    var keyValue;

    userDat.setKey = function(key) {
    keyValue = $scope.userData;
    };
    userDat.getKey = function(){
    	return "hello";
    };

    return userDat;
});

app.controller("LoginCtrl", ["$scope", "Auth","$rootScope", function($scope, Auth, $rootScope) {
	$scope.loginUser = function() {
		$scope.message = null;
		$scope.error = null;
		console.log($scope.email);
		console.log($scope.password);
		console.log("hello");
		/*Auth.$authWithPassword({
			email: $scope.email,
			password: $scope.password
		}, function(error, authData) {
			console.log("works");
			if (error) {
				$scope.error = "Login Failed: " + error;
				console.log("error");
			} else {
				$scope.message = "Authenticated successfully with payload:" + authData;
				console.log("no error");
			}
		});*/
		var ref = new Firebase("https://medxport.firebaseio.com");
		ref.authWithPassword({
		  "email": $scope.email,
		  "password": $scope.password
		}, function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		     dat = authData.uid;
		     sessionStorage['dat'] = dat;
		     console.log(dat);
		     document.cookie = 'username=' +dat;
		     window.location.href = "../home/home.html";
		  }
		});
}
}]);

// app.config(function($routeProvider) {
// 	$routeProvider.when('/login', {
// 		templateUrl: 'login.html',
// 		controller: 'LoginCtrl'
// 	});

// 	$routeProvider.when('/register', {
// 		templateUrl: 'signup.html',
// 		controller: 'RegisterCtrl'
// 	});

// 	$routeProvider.when('/', {
// 		templateUrl: 'home.html',
// 		controller: 'HomeCtrl'
// 	});

// 	$routeProvider.otherwise({ redirectTo: '/' });
// });

// app.run(function($firebaseObject, $rootScope, $location) {
// 	$rootScope.$on('$routeChangeStart', function(evt) {
// 		var ref = Firebase("https://medxport.firebaseio.com");
// 		if (ref.auth == nil) {
// 			$location.url('/login');
// 		}

// 		event.preventDefault();
// 	});
// });

// app.controller("SampleCtrl", function($scope, $firebaseObject) {
// 	var ref = new Firebase("https://medxport.firebaseio.com");
// 	ref.createUser({
// 		email    : "bobtony@firebase.com",
// 		password : "correcthorsebatterystaple"
// 	}, function(error, userData) {
// 		if (error) {
// 			console.log("Error creating user:", error);
// 		} else {
// 			console.log("Successfully created user account with uid:", userData.uid);
// 			ref.child("users").child(userData.uid).set({
// 				name:{
// 					first_name: "hello",
// 					last_name: "bob"
// 				}
// 			});
// 		}
// 	});

// /*  ref.authWithPassword({
//   	email    : "bobtony@firebase.com",
//   	password : "correcthorsebatterystaple"
//   }, function(error, authData) {
//   	if (error) {
//   		console.log("Login Failed!", error);
//   	} else {
//   		console.log("Authenticated successfully with payload:", authData);
//   	}
//   });*/
// });

// app.controller('mainCtrl',  function($scope, $firebaseObject) {
// 	$scope.templates = 
// 	[
// 		{ url: 'login.html' },
// 		{ url: 'home.html' }
// 	];

// 	$scope.template = $scope.template[0];
// 	var ref = new Firebase("https://medxport.firebaseio.com");
// 	ref.authWithPassword({
// 		email    : "bobtony@firebase.com",
//   		password : "correcthorsebatterystaple"
// 	}, function(error, authData) {
// 	if (error) {
//     	console.log("Login Failed!", error);
//   	} else {
//     console.log("Authenticated successfully with payload:", authData);
// 	}
// 	});

// });

