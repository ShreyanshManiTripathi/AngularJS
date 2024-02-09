(function () {
    angular.module("MsgApp", [])

        .controller('MsgController', MsgController)

    MsgController.inject = ['$scope', '#filter']
    function MsgController($scope, $filter) {
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
    }



})();