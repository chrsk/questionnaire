'use strict';

angular.module('questionnaire')
  .controller('AnswerCtrl', function ($scope, $firebaseArray) {

	$scope.loading = true;

    var ref = new Firebase("https://glowing-fire-9806.firebaseio.com/questions");
    ref.on("value", function(snapshot) {}, function(err) {
	  	$scope.loading = false;
	    $scope.anyAnswers = false;
	});

    $scope.questions = $firebaseArray(ref);

    $scope.questions.$loaded().then(function(questions) {
    	$scope.loading = false;
	    $scope.anyAnswers = questions.length > 0;
	});
	
  });
