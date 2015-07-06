'use strict';

angular.module('questionnaire')
  .controller('QuestionCtrl', function ($scope, $firebaseArray) {

    $scope.sentQ = '';
    $scope.ask = {
      question: ''
    };

    $scope.send = function() {
        var ref = new Firebase('https://glowing-fire-9806.firebaseio.com/questions');
        $scope.questions = $firebaseArray(ref);
        
        $scope.questions.$add({
          'question': $scope.ask.question
        }).then(function(ref) {
          $scope.success = true;
          $scope.questions.$destroy();
        });

		    $scope.sentQ = $scope.ask.question;
        $scope.ask.mail = '';
        $scope.ask.question = '';
        
    };
  });
