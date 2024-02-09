(function () {
    angular.module("MsgApp", [])

        .controller('MsgController', MsgController)
.filter ("loves",LovesFilter)  //Register filter in module
.filter('truth',TruthFilter);
    MsgController.inject = ['$scope', '$filter','lovesFilter'] //inject filter
    function MsgController($scope, $filter,lovesFilter) {
        $scope.name = "Shreyansh";
        $scope.stateOfBeing = "flying";
        $scope.buttonState = "Make Bear Eat";
$scope.cookieCost=.47;
        $scope.changeState = function () {
            switch ($scope.stateOfBeing) {
                case "flying":
                    $scope.stateOfBeing = "eating";
                    $scope.buttonState = "Make Bear Fly";

                    break;
                case "eating":
                    $scope.stateOfBeing = "flying";
                    $scope.buttonState = "Make Bear Eat";

                    break;
                default:
                    break;
            }
        }
        $scope.sayMessage = function () {
            var output = $filter('uppercase')
          var msg=  $scope.name + " likes to eat healthy snacks at night!";
            output = output(msg);
            return output;
        }
        $scope.sayLovesMessage = function () {
            var output = $filter('uppercase')
          var msg=  $scope.name + " likes to eat healthy snacks at night!";
            output = lovesFilter(msg);  //used filter
            return output;
        }
    }

function LovesFilter(){   //define filter
    return function(input){
        input=input || "";
        input=input.replace("likes","loves");
        return input;
    }
}

function TruthFilter(){
    return function(input,target,replace){
        input=input || "";
        input=input.replace(target,replace);
        return input;
    }
}


})();