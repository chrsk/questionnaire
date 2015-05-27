'use strict';

angular.module('questionnaire', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'ui.bootstrap', 'firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/question', {
        templateUrl: 'app/question/question.html',
        controller: 'QuestionCtrl'
      }) .when('/answer', {
        templateUrl: 'app/answer/answer.html',
        controller: 'AnswerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
