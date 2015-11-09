angular.module('starter.services', [])

.service('LoginService', function ($http) {
    return {
        
        signUp: function (user){
          console.log('at service this is the user', user)
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

.factory('scoring', function ($http){
  return {
    submitScores: function(user){
      console.log('at scores this is the user', user)
      return $http({
                    method: 'POST',
                    url: '/api/users/scores',
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
});


