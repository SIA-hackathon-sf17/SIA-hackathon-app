angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('customerSatisfactionSurvey', {
    url: '/page1',
    templateUrl: 'templates/customerSatisfactionSurvey.html',
    controller: 'customerSatisfactionSurveyCtrl'
  })

  .state('signup', {
    url: '/page2',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('rating', {
    url: '/page4',
    templateUrl: 'templates/rating.html',
    controller: 'ratingCtrl'
  })

  .state('continue', {
    url: '/page5',
    templateUrl: 'templates/continue.html',
    controller: 'continueCtrl'
  })

  .state('feedback', {
    url: '/page6',
    templateUrl: 'templates/feedback.html',
    controller: 'feedbackCtrl'
  })

  .state('page7', {
    url: '/page7',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('page8', {
    url: '/page8',
    templateUrl: 'templates/page8.html',
    controller: 'page8Ctrl'
  })

  .state('page9', {
    url: '/page9',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('page11', {
    url: '/page11',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

  .state('page12', {
    url: '/page12',
    templateUrl: 'templates/page12.html',
    controller: 'page12Ctrl'
  })

  .state('page13', {
    url: '/page13',
    templateUrl: 'templates/page13.html',
    controller: 'page13Ctrl'
  })

  .state('page15', {
    url: '/page15',
    templateUrl: 'templates/page15.html',
    controller: 'page15Ctrl'
  })

  .state('page14', {
    url: '/page14',
    templateUrl: 'templates/page14.html',
    controller: 'page14Ctrl'
  })

  .state('page10', {
    url: '/page10',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('finished', {
    url: '/page16',
    templateUrl: 'templates/finished.html',
    controller: 'finishedCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});