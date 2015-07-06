'use strict';

var app = angular.module('questionnaire', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'ui.bootstrap', 'firebase']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        title: 'Innerwille - Idee:',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/frage', {
        title: 'Innerwille - Frage?',
        templateUrl: 'app/question/question.html',
        controller: 'QuestionCtrl'
      }).when('/antwort', {
        title: 'Innerwille - Antwort.',
        templateUrl: 'app/answer/answer.html',
        controller: 'AnswerCtrl'
      }).when('/impressum', {
        title: 'Innerwille - Impressum.',
        templateUrl: 'app/impressum/impressum.html'
      }).when('/datenschutz', {
        title: 'Innerwille - Datenschutz.',
        templateUrl: 'app/impressum/daten.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
        $rootScope.title = current.$$route.title;
    });
}]);