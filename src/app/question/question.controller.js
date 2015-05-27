'use strict';

angular.module('questionnaire')
  .controller('QuestionCtrl', function ($scope, $firebaseArray) {

    $scope.ask = {
      mail : "",
      question: ""
    };

    var ref = new Firebase("https://glowing-fire-9806.firebaseio.com/questions");
    $scope.questions = $firebaseArray(ref);

    $scope.send = function() {
        $scope.success = true;
        $scope.questions.$add({
          "question": $scope.ask.question,
          "answer": "",
          "answerNum": "",
          "category": "",
          "enabled": false
        });
		
		$scope.ask.mail = "";
		$scope.ask.question = "";
    }
  });
