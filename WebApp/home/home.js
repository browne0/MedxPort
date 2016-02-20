var app = angular.module("medxport", ["firebase"]);
var data = sessionStorage['dat'];
app.factory("Auth", ["$firebaseAuth",
	function($firebaseAuth) {
		var ref = new Firebase("https://medxport.firebaseio.com");
		return $firebaseAuth(ref);
	}
	]);

app.controller("homeCtrl", ["$scope", "Auth",
	function($scope, Auth) {
		$scope.userData = data;
		console.log("here");
		//This calls the users data for when the come onto the page
		var ref = new Firebase("https://medxport.firebaseio.com/users/" + data);
		var userInfo = [];

		ref.on("value", function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
		    // key will be "fred" the first time and "barney" the second time
		    var key = childSnapshot.key();
		    // childData will be the actual contents of the child
		    var childData = childSnapshot.val();
		    userInfo.push(childData);
		  });
			$scope.isNew = userInfo[0].isNew;
			console.log($scope.isNew);
			$scope.type = userInfo[0].type;
			console.log($scope.type); 
		}, function (errorObject) {
			console.log("The read failed: " + errorObject.code);
		});

		//This pulls clinic data
		/*ref = new Firebase("https://medxport.firebaseio.com/Clinics/");
		$scope.clinics = [];
		$scope.ids = [];
		//$scope.data = $firebaseObject(ref);
		$scope.messages = $firebaseObject(ref);
		console.log($scope.messages);
		console.log($scope.data);
		$scope.$watch($scope.messages,$scope.clinics.push($scope.messages.));	
		*/
		ref = new Firebase("https://medxport.firebaseio.com/Clinics/");
		var clinics = [];
		var ids = [];
		ref.on("value", function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
		    // key will be "fred" the first time and "barney" the second time
		    var key = childSnapshot.key();
		    // childData will be the actual contents of the child
		    var childData = childSnapshot.val();
		    console.log(childData);
		    clinics.push(childData.clinicName);
		});
			for(key in snapshot.val()){
				ids.push(key);
			}

			var mySelect = $('#clinicSelection');
			$.each(clinics, function(val, text) {
			    mySelect.append(
			        $('<option></option>').val(val).html(text)
			    );
			});
		}, function (errorObject) {
			console.log("The read failed: " + errorObject.code);
		});
			var authUrl = new Firebase("https://medxport.firebaseio.com");
			var e = document.getElementById("clinicSelection");
			var index = e.selectedIndex;

			$( "#clinicSelection" ).on( "input", function() {
			  	console.log( $(this).children().text());
			});

		/*console.log(index + " " + strUser);
		var query = new Firebase("https://medxport.firebaseio.com/Clinics/" + $scope.ids[index] + "/doctorIds"); 
		query.on("value", function(snapshot) {
		  console.log(snapshot.val());
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});*/
	}
]);

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

