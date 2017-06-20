"use strict";

console.log("dataFactory.js loaded");

app.factory('DataFactory', function($q, $http, PFCreds) {

  const findRandomDog = (dogObj) => {
    return $q((resolve, reject) => {
      $http.get(`${PFCreds.randomDogUrl}`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const findShelter = (shelterObj) => {
    return $q((resolve, reject) => {
      $http.get(`${PFCreds.locateShelterUrl}`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const getShelterRecs = (recordObj) => {
    return $q((resolve, reject) => {
      $http.get(`${PFCreds.shelterRecordUrl}`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return {
    findRandomDog,
    findShelter,
    getShelterRecs
  };
});
