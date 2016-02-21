// create our angular module and inject firebase
var scheduleApp = angular.module('schedule', ['firebase']);

// create our main controller and get access to firebase
scheduleApp.controller('calController', function($scope, $firebase,$firebaseObject) {
	var ref = new Firebase("https://medxport.firebaseio.com/Clinics/A/doctorIds/6cbb0bf3-14e5-4866-ad9e-9c236e00c9de/schedule/");
	var fb = $firebaseObject(ref);
		
	/*ref.orderByChild("timeEnd").equalTo("0900").on("value", function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		    // key will be "fred" the first time and "barney" the second time
		    $scope.date = childSnapshot.key();
		    console.log($scope.date);
		    // childData will be the actual contents of the child
		    $scope.data = childSnapshot.val();
		  });
	}, function (errorObject) {
	  	console.log("The read failed: " + errorObject.code);
	});
	console.log(fb);*/
	/*var syncObject = fb.$asObject();
	syncObject.$bindTo($scope, 'days');*/
	$scope.showSelectedText = function(fromUI) {
	$scope.date = fromUI;
	if($scope.date==="01/31/2016")
    	fb.$bindTo($scope,"days");
    else{
   		$("#timeInfo").hide();
    }
	  console.log($scope.date);
    };

	
});
/*
  	var schedule = ;
 	log.console("hello");
 	var year,month;
  	$scope.schedule = schedule;
  	*/