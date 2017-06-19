"use strict";

console.log("shelterCtrl.js loaded");

app.controller("ShelterCtrl", function($scope, DataFactory, $routeParams, $location, $window){
  console.log("ShelterCtrl");
  DataFactory.findShelter()
  .then(function(locateShelters){
    $scope.shelters = locateShelters;
    console.log("shelters", $scope.shelters);
    console.log("locateShelters", locateShelters);
    $location.path('/shelter.html');
  });
});
