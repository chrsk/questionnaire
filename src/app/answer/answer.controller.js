'use strict';

angular.module('questionnaire')
  .controller('AnswerCtrl', function ($scope, $firebaseArray) {

    var ref = new Firebase("https://glowing-fire-9806.firebaseio.com/questions");
    $scope.questions = $firebaseArray(ref);
    $scope.loading = true;

    $scope.questions.$loaded().then(function(questions) {
    	$scope.loading = false;
	    $scope.anyAnswers = questions.length > 0;
	});
	
  });
