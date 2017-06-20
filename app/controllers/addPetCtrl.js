"use strict";

app.controller('AddPetCtrl', function($scope, $routeParams, DataFactory, $location){

  DataFactory.addPet($routeParams.petObj, $scope.obj)
  .then((data) =>{
    console.log("pet data", data);
    $scope.obj = data;
    $scope.obj.id = $routeParams.petObj;
  });
});
