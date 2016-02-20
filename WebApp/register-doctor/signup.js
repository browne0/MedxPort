var app = angular.module("medxport", ["firebase"]);

app.factory("Auth", ["$firebaseAuth",
	function($firebaseAuth) {
		var ref = new Firebase("https://medxport.firebaseio.com");
		return $firebaseAuth(ref);
	}
	]);

$(function(){
	var availableDoctorTypes = [
	'Audiologist',
	'Allergist',
	'Andrologist',
	'Anesthesiologist',
	'Cardiologist',
	'Cardiovascular Surgeon',
	'Clinical Neurophysiologist',
	'Dentist',
	'Dermatologist',
	'Emergency Doctor',
	'Endocrinologist',
	'Epidemiologist',
	'ENT Specialist',
	'Family Practitioner',
	'Gastroenterologist',
	'Gynecologist',
	'Psychiatrist',
	'Hematologist',
	'Hepatologists',
	'Neurologist',
	'Obstetrician',
	'Oncologist',
	'Pediatrician'
	];

	$("#doctorTypes").autocomplete({
		source: availableDoctorTypes
	});
});

app.controller("RegisterCtrl", ["$scope", "Auth",
	function($scope, Auth) {
		var ref = new Firebase("https://medxport.firebaseio.com/Clinics/");
		$scope.clinics = [];
		$scope.ids = [];
		ref.on("value", function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
		    // key will be "fred" the first time and "barney" the second time
		    var key = childSnapshot.key();
		    // childData will be the actual contents of the child
		    var childData = childSnapshot.val();
		    console.log(childData);
		    $scope.clinics.push(childData.clinicName);
		});
			for(key in snapshot.val()){
				$scope.ids.push(key);
			}

			console.log($scope.ids);
		}, function (errorObject) {
			console.log("The read failed: " + errorObject.code);
		});
		$scope.createUser = function() {
			$scope.message = null;
			$scope.error = null;

			Auth.$createUser({
				email: $scope.email,
				password: $scope.password
			}).then(function(userData) {
				$scope.message = "User created with uid: " + userData.uid;
				var authUrl = new Firebase("https://medxport.firebaseio.com");
				var userChild = authUrl.child('users').child(userData.uid);
				var Doctorid = userData.uid;
				var e = document.getElementById("clinicSelection");
				var index = e.selectedIndex;
				var strUser = e.options[e.selectedIndex].text;
				userChild.set({
					name:{
						isNew: true,
						type: "doctor",
						first_name: $scope.first_name,
						last_name: $scope.last_name,
						doctorType: $scope.doctorType,
						clinic: strUser
					}
				});
				ref = new Firebase("https://medxport.firebaseio.com/Clinics/" + $scope.ids[index] + "/doctorIds"); 
				var usersRef = ref;
				usersRef.update({
					[Doctorid]: $scope.first_name + " " + $scope.last_name
				});
					
					console.log($scope.clinics);
				}, function (errorObject) {
					console.log("The read failed: " + errorObject.code);
				
			}).catch(function(error) {
				$scope.error = "There was an error creating the user." + error;
			});
		}
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

