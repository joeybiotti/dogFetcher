"use strict";

console.log("recordsCtrl.js loaded");

app.controller("RecordsCtrl", function($scope, DataFactory, $routeParams, $location, $window) {
  DataFactory.getShelterRecs()
    .then(function(getRecords) {
      $scope.petRec = getRecords.data.petfinder.pets.pet;
      console.log("pet records", $scope.petRec);
      console.log("getShelterRecs", getRecords);
      $location.path('/records');
    });
});
