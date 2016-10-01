(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)

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

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (response){
        var result = response.data.menu_items;
        console.log(result.length);
        var foundItems = [];
        
        for (var i=0; i<result.length; i++){
          if (result[i].description.toLowerCase().indexOf(searchTerm) !== -1){
            foundItems.push(result[i]);
          }
        }
      }
    )
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });

    return promise;

  }

}

})();
