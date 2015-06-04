'use strict';

angular.module('questionnaire')
  .controller('NavbarCtrl', function ($scope, $location) {
	$scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  });
