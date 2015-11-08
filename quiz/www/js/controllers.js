angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {


})

.controller('LoginCtrl', function ($scope, LoginService, $ionicPopup, $state) {
  $scope.data = {};
 
  $scope.login = function() {
    console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.email);

  }
  
  $scope.signup = function() {
    console.log('at controller, data sent: ', $scope.data)
    LoginService.signUp($scope.data)
      .success(function (data){
        $state.go('tab.dash');
      }).error(function (data){
        var alertPopup = $ionicPopup.alert({
          title: 'Sign up failed!',
          template: 'Please check input credentials!'
        });
      });
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
