"use strict";

console.log("searchCtrl.js loaded");

app.controller('SearchCtrl', function($scope, $window, SearchTermData) {
  $scope.searchText = SearchTermData;
  console.log("SearchTermData", SearchTermData);
});
