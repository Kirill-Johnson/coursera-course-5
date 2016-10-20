(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['ProfileService'];
function MyInfoController(ProfileService) {
 var $ctrl = this;
 $ctrl.userProfile = ProfileService.getUserProfile();

 $ctrl.noProfile = true;
 if ( $ctrl.userProfile != null ) {
  $ctrl.noProfile = false;
 }
}

})();
