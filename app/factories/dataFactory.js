"use strict";

console.log("dataFactory.js loaded");

app.factory('DataFactory', function($q, $http, PFCreds, FBCreds) {

// FUNCTIONS TO RETURN PETS

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

//FUNCTIONS TO ADD PETS TO USER'S FIREBASE

  const addPet = (dogObj) => {
    return $q((resolve, reject) =>{
      console.log("pets 222", dogObj);
      $http.post(`${FBCreds.databaseURL}/dogs.json`, dogObj)
      .then((petID) =>{
        resolve(petID);
      })
      .catch((error)=>{
        reject(error);
      });
    });
  };

  const removePet = (petID) =>{
    return $q((resolve, reject) =>{
      $http.delete(`${FBCreds.databaseURL}/dogs.json`, petID)
      .then((response) =>{
        resolve(response);
      })
      .catch((error) =>{
        reject(error);
      });
    });
  };

  const usersDogs = (dogs) => {
    return $q((resolve, reject) =>{
      $http.get(`${FBCreds.databaseURL}/dogs.json`, dogs)
      .then((resposne) =>{
        resolve(resposne);
      })
      .catch((error) =>{
        reject(error);
      });
    });
  };

  return {
    findRandomDog,
    findShelter,
    getShelterRecs,
    addPet,
    removePet,
    usersDogs
  };
});
