(function () {

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);
 CategoriesController.$inject = ['categories'];
 function CategoriesController(categories) {
  var controller = this;
  controller.categories = categories; }
})();
