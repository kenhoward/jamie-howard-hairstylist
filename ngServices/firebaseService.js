var app = angular.module('noServer');

app.service('firebaseService', function ($firebase) {
  var firebaseUrl = 'https://noserver.firebaseio.com/';

  this.getUser = function(userId){
    return $firebase(new Firebase(firebaseUrl + 'users/' + userId)).$asObject();
  };

  this.getThings = function(userId){
    return $firebase(new Firebase(firebaseUrl + 'users/' + userId + '/things')).$asArray();
  }
})