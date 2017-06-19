"use strict";

console.log("app.js");

const app = angular.module('DogRescueApp', ["ngRoute"]);

let isAuth = (AuthFactory) =>
  new Promise(function(resolve, reject) {
    AuthFactory.isAutheticated()
    .then((userExists) =>{
      if(userExists){
        console.log("real user");
        resolve();
      }else{
        console.log("fake user");
        reject();
      }
    });
});

app.config(($routeProvider) =>{
  $routeProvider
  .when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  })
  .when('/auth', {
    templateUrl: 'partials/auth.html',
    controller: 'AuthCtrl'
  })
  .when('/search', {
    templateUrl: 'partials/search.html',
    controller: 'SearchCtrl'
  })
  .when('/shelter', {
    templateUrl: 'partials/shelter.html',
    controller: 'ShelterCtrl'
  }).when('/main', {
    templateUrl: 'partials/main.html',
    controller: 'MainCtrl'
  });
});

app.run(($location, PFCreds, FBCreds)=>{

  let PFauthConfig = {
    apiKey: PFCreds.apiKey,
    authDomain: PFCreds.authDomain,
    databaseURL: PFCreds.databaseURL
  };

  let FBauthConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain,
    databaseURL: FBCreds.databaseURL
  };

  firebase.initializeApp(FBauthConfig);
});
