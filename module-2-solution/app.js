(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService){
    var showbuylist= this;

    showbuylist.buyList = ShoppingListCheckOffService.getbuyitems();
    showbuylist.additem = function (itemindex){
    ShoppingListCheckOffService.addtoboughtlist(itemindex); };
    showbuylist.errormessage="Everything is bought!"; }

  AlreadyBoughtShoppingController.inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService ){
    var showboughtlist = this;
    showboughtlist.boughtList = ShoppingListCheckOffService.getboughtitems();
    showboughtlist.emptymessage ="Nothing bought yet."; }

  function ShoppingListCheckOffService() {
    var service= this;
    var buyList=[ { name: "cookies", quantity: "10"}, { name: "chips", quantity: "5"}, { name: "milk",quantity: "5"}, { name:"bread",quantity: "2"}, { name: "tea",quantity: "2"} ];

  var boughtList= [];
    service.getbuyitems = function () {
      return buyList; };
      service.getboughtitems = function () {
      return boughtList; };
      service.addtoboughtlist = function(itemindex){
      boughtList.push(buyList[itemindex]);
      buyList.splice(itemindex,1); };
  }
})();
