'use strict';

angular.module('questionnaire')
  .controller('MainCtrl', function ($scope, $firebaseArray) {

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
          "date" : new Date(),
          "enabled": false
        });
		
		$scope.ask.mail = "";
		$scope.ask.question = "";
    }
  });
