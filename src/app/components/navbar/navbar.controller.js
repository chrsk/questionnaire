'use strict';

angular.module('questionnaire')
  .controller('NavbarCtrl', function ($scope, $location) {
	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    $scope.addPostfix = function (viewLocation) { 
    	var postfix = '';
    	if (viewLocation === '/' && $scope.isActive(viewLocation)) {postfix = ':'};
    	if (viewLocation === '/question' && $scope.isActive(viewLocation)) {postfix = '?'};
    	if (viewLocation === '/answer' && $scope.isActive(viewLocation)) {postfix = '!'};
        return postfix;
    };
  });
