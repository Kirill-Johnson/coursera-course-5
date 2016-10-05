(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);

 MenuItemsController.$inject = ['items'];
 function MenuItemsController(items) {
  var controller = this;
  controller.items = items.menu_items;
  console.log("Items in category: " + controller.items); };
})();
