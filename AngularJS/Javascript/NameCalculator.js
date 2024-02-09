(function () {
    angular.module('NameCalculator', [])

        .controller('NameCalculatorController', function ($scope) {
            var value;
            $scope.name = "";
            $scope.totalValue = 0;
            $scope.displayNumeric = function () {
                value = calculator($scope.name)
                $scope.totalValue = value;

            }

            function calculator(string) {
                var numericValue = 0;
                for (var i = 0; i < string.length; i++) {
                    numericValue += string.charCodeAt(i);
                }
                return numericValue;
            }
        })

})();