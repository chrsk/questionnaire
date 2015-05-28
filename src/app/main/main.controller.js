'use strict';

angular.module('questionnaire')
  .controller('MainCtrl', function ($scope, $firebaseArray) { 

      $scope.mail = {
        address : ""
      };

      $scope.send = function() {
          var ref = new Firebase("https://glowing-fire-9806.firebaseio.com/mails");
          $scope.mails = $firebaseArray(ref);
          
          $scope.mails.$add({
            "address": $scope.mail.address
          });

          $scope.success = true;
          $scope.mail.address = "";

      } 
  });
