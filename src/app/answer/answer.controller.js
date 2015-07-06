'use strict';

angular.module('questionnaire')
  .controller('AnswerCtrl', function ($scope, $firebaseArray) {

	$scope.loading = true;
	$scope.hiddenAnswer = true;
	$scope.lastAnswer = '';

	$scope.q = '';
	$scope.orderNewestFirst = 'true';
	$scope.reverse = true;

    var ref = new Firebase('https://glowing-fire-9806.firebaseio.com/answers');
    ref.on('value', function() {}, function() {
	  	$scope.loading = false;
	    $scope.anyAnswers = false;
	});

    $scope.questions = $firebaseArray(ref);
    
    $scope.questions.$loaded().then(function(questions) {
    	$scope.loading = false;
	    $scope.anyAnswers = questions.length > 0;
	    $scope.lastAnswer = $scope.questions.$getRecord('lastAnswer');
	});

	$scope.order = function() {
        $scope.reverse = $scope.orderNewestFirst === 'true' ? true : false;
    };
	
  });
