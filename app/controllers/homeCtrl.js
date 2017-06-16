"use strict";

console.log("homeCtrl.js loaded");

app.controller('HomeCtrl', function($scope, DataFactory, $routeParams, $location, $window) {
  console.log("HomeCtrl");
  DataFactory.findRandomDog()
    .then(function(petCollection) {
      $scope.pets = petCollection;
      console.log("pets", $scope.pets);
      console.log("petCollection", petCollection);
      $location.path("/home");
    });
});
