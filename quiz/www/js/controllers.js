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

.controller('ChatsCtrl', function ($scope, jService) {
  
  $scope.questions = [];
  for(var i = 0; i<10; i++){
    jService.getQues().then(function (data){
      console.log('in promise', data)
      $scope.questions.push(data)
      console.log('$scope in promise', $scope.questions)
    })
  }
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

}) ();
