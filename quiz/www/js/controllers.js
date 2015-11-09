(function() {
angular.module('starter.controllers', [])


.controller('LoginCtrl', function ($scope, LoginService, $ionicPopup, $state, $window) {
  $scope.data = {};
 
  $scope.login = function() {
    console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.email);

  }
  
  $scope.signup = function() {
    console.log('at controller, data sent: ', $scope.data)
    LoginService.signUp($scope.data)
    $window.localStorage.setItem('username', $scope.data.username);
    $window.localStorage.setItem('email', $scope.data.email);
    $state.go('tab.chats');
  }
})

.controller('ChatsCtrl', function ($scope, jService, $window, scoring) {
  $scope.user = {}
  $scope.user.name = $window.localStorage.username;
  $scope.user.email = $window.localStorage.email;
  $scope.user.score = 0;

  $scope.questions = [];
  $scope.answers = [];
  $scope.submitted = false;

  for(var i = 0; i<5; i++){
    jService.getQues().then(function (data){
      data.answer = data.answer.toLowerCase();
      $scope.questions.push(data);
      $scope.answers.push("");
    })
  }

  $scope.submit= function(){
    for(var i= 0; i < $scope.answers.length;i++){
        if($scope.answers[i] === $scope.questions[i].answer){
          $scope.user.score++;
        }
      }
      $scope.submitted = true;
  }

  $scope.email=function(){
    console.log('in email submit', $scope.user)
    scoring.submitScores($scope.user)
  }

})

}) ();
