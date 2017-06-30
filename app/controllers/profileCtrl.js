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
    $scope.savedDogs = showDogs.data;
    console.log("$scope.savedDogs", $scope.savedDogs);
    console.log("showDogs", showDogs);
  });

  // $scope.remove = function(dog){
  //   DataFactory.removePet(dog)
  //   .then(function(minusDog){
  //     $scope.savedDogs = minusDog.data;
  //     console.log("$scope.savedDogs", $scope.savedDogs);
  //   });
  //   console.log("remove btn clicked");
  // };

  $scope.remove = function(fido){
    DataFactory.removePet(fido)
    .then((response) =>{
      console.log("response", response);
      $scope.profileDogs();
    });
  };

});
