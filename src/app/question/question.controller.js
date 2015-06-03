'use strict';

angular.module('questionnaire')
  .controller('QuestionCtrl', function ($scope, $firebaseArray) {

    $scope.ask = {
      mail : "",
      question: ""
    };

    $scope.send = function() {
        var ref = new Firebase("https://glowing-fire-9806.firebaseio.com/questions");
        $scope.questions = $firebaseArray(ref);
        
        $scope.questions.$add({
          "question": $scope.ask.question,
          "answer": "",
          "answerNum": "",
          "category": "",
          "enabled": false
        }).then(function(ref) {
          var id = ref.key();
          console.log("added record with id " + id);
          $scope.success = true;
          $scope.questions.$destroy();
        });
		
    		$scope.ask.mail = "";
    		$scope.ask.question = "";

    }
  });
