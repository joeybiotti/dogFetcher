"use strict";

console.log("profile controller loaded");

app.controller('ProfileCtrl', function($scope, DataFactory, AuthFactory, $location){

  let user = AuthFactory.getUser();

  DataFactory.profileDogs()
  .then(function(showDogs){
    $scope.savedDogs = showDogs;
    console.log("$scope.savedDogs", $scope.savedDogs);
    console.log("showDogs", showDogs);
  });
});
