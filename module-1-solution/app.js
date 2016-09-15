(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.check = function () {
    if (typeof($scope.menu) == "undefined" || $scope.menu.length == "") {
      $scope.message = "Please enter data first";
      $scope.state = "red";
      return;
    }
    var menuItems = $scope.menu.split(',');

    if (menuItems.length > 3) {
      $scope.message = "Too much!";
      $scope.state = "green";
    }
    else {
      $scope.message = "Enjoy!";
      $scope.state = "green";
    }
  };
}

})();
