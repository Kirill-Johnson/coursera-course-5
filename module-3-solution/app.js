(function (){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

 NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
   var list = this;
    list.search = function (){ if (typeof(list.searchText) == "undefined" || list.searchText == ""){ list.found = []; }
     else { var foundItems = MenuSearchService.getMatchedMenuItems(list.searchText.toLowerCase());
      foundItems.then(function (response){ console.log("Response: ", response); list.found = response; });
     } }
    list.removeItem = function (index){ list.found.splice(index, 1); }}

 MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
   var service = this;

  service.getMatchedMenuItems = function(searchTerm){
  var response = $http({ method: "GET", url: "https://davids-restaurant.herokuapp.com/menu_items.json" }).then(function (response){
   var result = response.data.menu_items;
   console.log(result.length);
   var foundItems = [];

    for (var i=0; i<result.length; i++){
     if (result[i].description.toLowerCase().indexOf(searchTerm) !== -1){
     foundItems.push(result[i]); } }

   console.log(foundItems);
    return foundItems; }).catch(function(error){ return error; });

    return response;
  };
 }

 function FoundItems(){
  var ddo = {
   templateUrl: 'loader/item-template.html',
   scope: { found: '<', onRemove: '&' } };

  return ddo;
 }
})();
