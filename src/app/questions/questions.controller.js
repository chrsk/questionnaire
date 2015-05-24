'use strict';

angular.module('questionnaire')
  .controller('QuestionsCtrl', function ($scope, $firebaseArray) {

    var ref = new Firebase("https://glowing-fire-9806.firebaseio.com/questions");
    $scope.questions = $firebaseArray(ref);
	
  });
