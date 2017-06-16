"use strict";

console.log("authCtrl.js loaded");

app.controller('AuthCtrl', function($scope, AuthFactory, $window, $location) {

  console.log("AuthCtrl has loaded");
  $scope.account = {
    email: "",
    password: ""
  };

  let logout = () => {
    console.log("logout clicked");
    AuthFactory.logoutUser()
      .then(function(data) {
        console.log("logged out?", data);
        $window.location.url = "#!/login";
      }, function(error) {
        console.log("error occured on logout");
      });
  };
});
