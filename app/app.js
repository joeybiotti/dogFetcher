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
        console.log("fake ass user");
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
  .when('/signin', {
    templateUrl: 'partials/auth.html',
    controller: 'AuthCtrl'
  })
  .when('/search', {
    templateUrl: 'partials/search.html',
    controller: 'SearchCtrl'
  });
});

// app.run(($location, PFCreds)=>{

  // let PFauthConfig = {
  //   apiKey: PF_creds.apiKey,
  //   authDomain: PF_creds.authDomain,
  //   databaseURL: PF_creds.databaseURL
  // };

//   	// firebase.initializeApp(authConfig);
// });
