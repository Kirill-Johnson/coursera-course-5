(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'loader/item-template.html',
    scope: { found: '<', onRemove: '&' },
    controller: NarrowItDownController,
    bindToController: true,
    controllerAs: 'list'
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.searchMenu = function(searchTerm){
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    promise.then(function (response) {
      list.found = response.data.menu_items; })
    .catch(function (error) {
      console.log("Something went terribly wrong."); });
  }

  list.removeItem = function (itemIndex) {
    list.found.splice(itemIndex, 1); };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var allItems = [];
  service.getFullMenu = function () {
    var response = $http({ method: "GET", url: (ApiBasePath + "/menu_items.json")});
    return response;
  }

  service.getMatchedMenuItems = function (searchTerm) {
    var service = this;
    var allItems = [];

    var promise = service.getFullMenu();
    promise.then(function (response) {
        allItems = response.data.menu_items;
    }).then( function() {
      // Filtering results
      var i=0;
        arr=response.data.menu_items;
        for(i=0;i<arr.length;i++){
        if(arr[i].description==searchTerm){
        foundItems[i]=arr[i];
        }
      }
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });

    return promise;

  }

}

})();
