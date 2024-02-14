(function () {
    'use strict';
   
        var shoppingList1=[
            "Milk","Tea", "Sugar","Gas","Fire","Salt"
        ];
        var shoppingList2=[
            {
                name:"milk",
                quantity:"2"
            },
            {
                name:"tea",
                quantity:"1"
            },
            {
                name:"veggies",
                quantity:"7"
            },
            {
                name:"tomato",
                quantity:"2"
            }
        ]
        angular.module('ShoppingListApp', [])

        .controller('ShoppingListController', ShoppingListConroller);
ShoppingListConroller.$inject=['$scope'];
function ShoppingListConroller($scope){
    $scope.shoppingList1=shoppingList1;
    $scope.shoppingList2=shoppingList2;

$scope.addToList=function(){
    var newItem={
        name:$scope.newItemName,
        quantity:$scope.newItemQuantity
    };
    $scope.shoppingList2.push(newItem);
}
}

}

)();