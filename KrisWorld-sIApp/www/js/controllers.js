angular.module('app.controllers', [])
  
.controller('customerSatisfactionSurveyCtrl', ['$scope', '$stateParams', 
                                           
function ($scope, $stateParams) {


}])
   
.controller('signupCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {
    $scope.data = {
        name: 'mona',
        email: 'mona@example.com',
        freq_flyer_id: '1234567890'
    }

    $scope.submitting = false;
    
    $scope.submit = function(){
        $scope.submitting = true;
        signupCtrl.add($scope.data).then(function(){
          $scope.data = {
            name: 'mona',
            email: 'mona@example.com',
            freq_flyer_id: '1234567890'
          }
          $scope.submitting = false;
}])
   
.controller('ratingCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {
    $scope.data = {
      rating: '4'
    }

    $scope.submitting = false;
    
    $scope.submit = function(){
        $scope.submitting = true;
        ratingCtrl.add($scope.data).then(function(){
          $scope.data = {
            rating: '4'
          }
          $scope.submitting = false;
  })

}])
   
.controller('continueCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])
   
.controller('feedbackCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])
   
.controller('page7Ctrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])
   
.controller('page8Ctrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])
   
.controller('page9Ctrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])
   
.controller('page11Ctrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])
   
.controller('page12Ctrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])
   
.controller('page13Ctrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])
   
.controller('page15Ctrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])
   
.controller('page14Ctrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])
   
.controller('page10Ctrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])
   
.controller('finishedCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {
  
}])
 
