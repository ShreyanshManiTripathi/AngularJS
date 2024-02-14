(function () {
    'use strict';
   
        var numberArray=[1,2,3,4,5,6,7,8,9,0];
        console.log("Number Array",numberArray);
        
        function above5(value){
            return value >5;
        }

var filteredNumberArray=numberArray.filter(above5);
console.log("Filtered Number Array:",filteredNumberArray);

var shoppingList=[
    "Milk","Tea", "Sugar","Gas Sugar","Fire","Salt"
];
var searchValue="Sugar";
function containsFilter(value) {
    return value.indexOf(searchValue)!=-1
}
var searchedShoppingList=shoppingList.filter(containsFilter);
    
console.log("searched shopping list",searchedShoppingList)
}
)();