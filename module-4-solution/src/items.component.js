(function () {
'use strict';
angular.module('MenuApp')
.component('items', {
 bindings: { items: "<" },
 templateUrl: 'src/templates/items.component.html' })
})();
