"use strict";

app.controller('AddPetCtrl', function($scope, $routeParams, DataFactory, AuthFactory, $location){

  let user = AuthFactory.getUser();

  DataFactory.addPet($routeParams.petObj, $scope.obj)
  .then((data) =>{
    console.log("pet data", data);
    $scope.obj = data;
    $scope.obj.id = $routeParams.petObj;
  });


  $scope.submit = function(){
    DataFactory.addPet($scope.obj)
    .then(function(){
      $location.path('/home');
    });
    console.log("obj-- submit", $scope.obj);
    console.log("submit btn clicked");
  };
});
