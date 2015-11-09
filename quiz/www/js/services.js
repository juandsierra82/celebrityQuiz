angular.module('starter.services', [])

.service('LoginService', function ($q, $http) {
    return {
        
        signUp: function (user){
          console.log('at service this is the user', user)
          // user = JSON.stringify(user);
          return  $http({
                    method: 'POST',
                    url: '/api/users/signup',
                    data: user
                  })
                .then(function (res){
                  console.log('this is the data sent to the server', res.data)
                  return res.data;
                });

        }
    }
})



.factory('jService', function ($http, $q){
  console.log('in jService service')
  
  return { 
    getQues: function(){
      return $http({
        method: 'GET',
        url: 'http://jservice.io/api/random',
        }).then(function (res){
          console.log('this is the response', res.data)
          return res.data[0]
        })
      }
    }
})

.factory('Chats', function() {

  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
