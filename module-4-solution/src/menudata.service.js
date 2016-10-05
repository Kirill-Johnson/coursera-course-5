(function () {
'use strict';
angular.module('data').constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');
.service('MenuDataService', MenuDataService);
 MenuDataService.$inject = ['$http', 'ApiBasePath'];
 function MenuDataService($http) {
  var service = this;
  service.getAllCategories = function () {
   return $http.get(ApiBasePath + "/categories.json")
   .then(function (response) { return response.data; });
  };
  service.getItemsForCategory = function (categoryShortName) {
   return $http.get(ApiBasePath + "/menu_items.json?category=" + categoryShortName).then(function (response) { return response.data; });
  }
 }
})();
