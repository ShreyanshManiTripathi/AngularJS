(function () {
    'use strict';
    angular.module('DigestApp', [])

        .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope', '$timeout'];
    // $scope.name="Shreyansh";
    function CounterController($scope, $timeout) {
        $scope.counter = 0;



        $scope.upCounter = function () {
            $timeout(() => {
                $scope.counter++;
                console.log($scope.counter);
            }, 2000);

        }

        // $scope.upCounter = function () {
        //     setTimeout(() => {
        //         $scope.$apply(function () {
        //             $scope.counter++;
        //             console.log($scope.counter);
        //         })
        //     }, 2000);

        // }
        // $scope.upCounter=function(){
        //     setTimeout(() => {

        //         $scope.counter++;
        //         console.log($scope.counter);
        //         $scope.$digest();
        //     }, 2000);

        // }


    }

}

)();