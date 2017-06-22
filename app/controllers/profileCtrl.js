"use strict";

console.log("profile controller loaded");

//
// app.controller('ProfileCtrl', function($scope, DataFactory, AuthFactory, $routeParams, $location, $window, FBCreds, usersDogs){
//   DataFactory.usersDogs()
//     .then(function(returnDogs){
//       $scope.likedDogs = usersDogs.dogs;
//       console.log("likedDogs", $scope.likedDogs);
//       $location.path('/profile');
//     });
//
// });

app.controller('ProfileCtrl', function($scope, DataFactory, AuthFactory, $location){
  DataFactory.usersDogs()
  .then(function(showDogs){
    $scope.savedDogs = showDogs;
    // console.log("$scope.showDogs", $scope.showDogs);
    console.log("showDogs", showDogs);
  });
});
