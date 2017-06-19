"use strict";

console.log("dataFactory.js loaded");

app.factory('DataFactory', function($q, $http, PFCreds){
console.log("pfcreds", PFCreds);

  const findRandomDog = (dogObj) =>{
    return $q((resolve, reject) =>{
      $http.get(`${PFCreds.randomDogUrl}`)
      .then((response)=>{
        console.log("response", response);
        resolve(response);
      })
      .catch((error)=>{
        reject(error);
      });
    });
  };

const findShelter = (shelterObj) =>{
  return $q((resolve, reject) =>{
    $http.get(`${PFCreds.locateShelterUrl}`)
    .then((response)=>{
      resolve(response);
    })
    .catch((error) =>{
      reject(error);
    });
  });
};

return{findRandomDog, findShelter};
});
