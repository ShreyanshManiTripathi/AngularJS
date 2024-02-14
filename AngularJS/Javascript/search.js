(function () {
    'use strict';
   
        var shoppingList=[
            "Milk","Tea", "Sugar","Gas","Fire","Salt"
        ];
      
        angular.module('ShoppingListApp', [])

        .controller('ShoppingListController', ShoppingListConroller);
ShoppingListConroller.$inject=['$scope'];
function ShoppingListConroller($scope){
    $scope.shoppingList=shoppingList;
}

}

)();