(function(){
angular.module("DIApp",[])

.controller('DependencyController',DIController)

function DIController($scope,$filter,$injector){
$scope.name="Shreyansh";
console.log($injector.annotate(DIController));

$scope.upper=function(){
    var upCase=$filter('uppercase');
    $scope.name=upCase($scope.name);
}
}



})();