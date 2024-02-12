(function () {
    'use strict';
    angular.module('DigestApp', [])

        .controller('BindingController', BindingController);

    BindingController.$inject = ['$scope'];
    function BindingController($scope, ) {
        $scope.counter = 0;
        $scope.firstName = "Shreyansh";
        // $scope.fullName = "";

        $scope.showNumberOfWatchers = function () {
            console.log("# of Watchers", $scope.$$watchersCount);
        }

       $scope.setFullName=function(){
        $scope.fullName=$scope.firstName+" "+"Tripathi";
       }

       $scope.logFirstName=function(){
        console.log("First Name is:",$scope.firstName);
       };

       $scope.logFullName=function(){
        console.log("Full Name is:",$scope.fullName);
       };

    }

}

)();