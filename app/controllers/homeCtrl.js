"use strict";

console.log("homeCtrl.js loaded");

app.controller('HomeCtrl', function($scope, DataFactory, AuthFactory, $window){
  console.log("HomeCtrl");
  DataFactory.findRandomDog()
  .then(function(petCollection){
    $scope.pets = petCollection;
    console.log("dogz", $scope.pets);
  });

});
