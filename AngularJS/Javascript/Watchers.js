(function () {
    'use strict';
    angular.module('DigestApp', [])

        .controller('CounterController',CounterController);

CounterController.$inject=['$scope'];
$scope.name="Shreyansh";
function CounterController($scope){
    $scope.onceCounter=0;
    $scope.counter=0;
    $scope.counter3=0;
    $scope.showNumberOfWatchers=function(){
        console.log("# of watchers"+$scope.$$watchersCount);
    }
    
    $scope.countOnce=function () {
        $scope.onceCounter=1;
    }
    
$scope.upCounter=function(){
    $scope.counter++
    console.log('up');
}

$scope.$watch(function(){
    console.log("Digest Loop Fired");
})
// $scope.upandLAstCounter=function(){
//     $scope.counter3++
//     console.log('up and last');
// }

//     $scope.$watch('onceCounter',function(newValue,oldValue){
//         console.log("Once old value:",oldValue);
//         console.log("Once new Value",newValue);
//     })
    
//     $scope.$watch('counter',function(newValue,oldValue){
//         console.log("couhter old value:",oldValue);
//         console.log("counter new Value",newValue);
//     });
//     $scope.$watch('counter3',function(newValue,oldValue){
//         console.log("couhter3 old value:",oldValue);
//         console.log("counter3 new Value",newValue);
//     })
}

}

)();