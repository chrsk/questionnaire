'use strict';

angular.module('questionnaire')
  .controller('MainCtrl', function ($scope, $firebaseArray) {

    $scope.ask = {
      mail : "",
      question: ""
    };

    $scope.questions = [
      {
      question: 'Wer ist eigentlich deine Lieblingsband?',
      answer: 'Dornenreich',
      enabled : true,
      date: new Date()
      },
      {
      question: 'Lorem Ipsum, dolor set item?',
      answer: 'Ad eget mauris neque ultricies non condimentum fusce ridiculus suspendisse ut ullamcorper ligula netus at. Urna consectetur vestibulum nascetur malesuada nulla libero suspendisse consectetur aliquet nostra risus a vulputate suspendisse. A scelerisque est fringilla elit potenti ante parturient sagittis elit sociosqu hac adipiscing proin ac mattis nascetur cursus iaculis nullam aliquet. Commodo habitasse suspendisse non a integer lobortis cum a a parturient adipiscing scelerisque praesent urna ligula facilisi.',
      enabled: false,
      date: new Date()
      }
    ];

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
    }
  });
