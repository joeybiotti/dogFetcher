"use strict";

console.log("profile controller loaded");

app.controller('ProfileCtrl', function($scope, DataFactory, AuthFactory, $location){

  let user = AuthFactory.getUser();

  $scope.savedDogs = {
    "name": "",
    "breed": "",
    "sex": "",
    "description": ""
  };

  DataFactory.profileDogs()
  .then(function(showDogs){
    $scope.savedDogs = showDogs;
    console.log("$scope.savedDogs", $scope.savedDogs);
    console.log("showDogs", showDogs);
  });

  $scope.sendEmail = function(){
    console.log("email btn clicked");
    $location.path('/contact');
  };


  $scope.remove = function(dog){
    console.log("$scope.savedDogs", $scope.savedDogs);
    DataFactory.removePet(dog)
    .then(function(){
      DataFactory.profileDogs()
      .then(function(newList){
        $scope.savedDogs = newList;
      });
      console.log("$scope.savedDogs", $scope.savedDogs);
    });
      console.log("remove btn clicked");
      let profileDogs =  $scope.savedDogs;
  };

});
