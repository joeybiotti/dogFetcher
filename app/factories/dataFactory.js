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
      console.log("add pets", dogObj);
      $http.post(`${FBCreds.databaseURL}/dogs.json`, dogObj)
      .then((petID) =>{
        resolve(petID);
      })
      .catch((error)=>{
        reject(error);
      });
    });
  };

  const profileDogs = (usersDogs) =>{
    let profileDogs = [];
    return $q ((resolve, reject) =>{
    console.log("usersDogs 123", usersDogs);
    $http.get(`${FBCreds.databaseURL}/dogs.json`, usersDogs)
    .then((response) =>{
      let dogs = response.data;
      console.log(response);
      Object.keys(dogs).forEach((key) => {
               dogs[key].id = key;
               profileDogs.push(dogs[key]);
               console.log(dogs, "this is items");
           });
           console.log("profile dogs", profileDogs);
      resolve(profileDogs);
    })
    .catch((error) =>{
      reject(error);
    });
  });
};

  const removePet = (dogID) => {
    return $q((resolve, reject) =>{
      $http.delete(`${FBCreds.databaseURL}/dogs/${dogID}/.json`)
      .then((response) =>{
        resolve(response);
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
    profileDogs
  };
});
