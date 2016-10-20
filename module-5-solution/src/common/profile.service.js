(function () {
"use strict";

angular.module('common')
.service('ProfileService', ProfileService);

ProfileService.$inject = [];
function ProfileService() {
 var service = this;
 service.userProfile = null;

 service.setUserProfile = function(profile) {
  service.userProfile = profile; }

 service.getUserProfile = function() {
  return service.userProfile; }
}

})();
