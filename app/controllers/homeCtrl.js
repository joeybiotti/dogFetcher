"use strict";

console.log("homeCtrl.js loaded");

app.controller('HomeCtrl', function($scope, DataFactory, AuthFactory, $routeParams, $location, $window) {
  console.log("HomeCtrl");

  let user = AuthFactory.getUser();

  $scope.myCurrentDog = {
    "name": "",
    "breed": "",
    "sex": "",
    "description": ""
  };
  //
  // console.log("myCurrentDog", myCurrentDog);

  DataFactory.findRandomDog()
    .then(function(petCollection) {
      let pets = petCollection.data.petfinder.pet;
      $scope.myCurrentDog.name = pets.name.$t;
      $scope.myCurrentDog.img = pets.media.photos.photo[2].$t;
      $scope.myCurrentDog.breed = pets.breeds.breed.$t;
      $scope.myCurrentDog.sex = pets.sex.$t;
      $scope.myCurrentDog.description = pets.description.$t;
      $scope.myCurrentDog.city = pets.contact.city.$t;
      $scope.myCurrentDog.state = pets.contact.state.$t;
      console.log("pets", $scope.pets);
      $location.path("/home");
    });



  $scope.submit = function() {
    console.log("$scope.myCurrentDog", $scope.myCurrentDog);
    DataFactory.addPet($scope.myCurrentDog)
      .then((data) => {
        $location.path("/home");
      });
    console.log("add to list btn clicked");
  };


  $scope.sendEmail = function(){
    console.log("email btn clicked");
    $location.path('/contact');
  };

});
