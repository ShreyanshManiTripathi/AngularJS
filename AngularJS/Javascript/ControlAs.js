(function(){
    'use strict'
    
    angular.module('ControllerAsApp',[])
    // .controller('ParentController1',ParentController1)
    // .controller('ChildController1',ChildController1)
    .controller('ParentController2',ParentController2)
    .controller('ChildController2',ChildController2);
    
    // ParentController1.$inject=['$scope'];
    // function ParentController1($scope){
    //     $scope.parentValue=1;
    //     $scope.pc=this;
    //     $scope.pc.parentValue=1;
    // }
    
    // ChildController1.$inject=['$scope'];
    // function ChildController1($scope){
    //    console.log("$scope.parentValue:",$scope.parentValue);
    // console.log("Child $scope",$scope);
    
    // $scope.parentValue=5;
    // console.log("***Changed: $scope.parentValue=5***");
    // console.log(" $scope.parentValue=5***",$scope.parentValue);
    // console.log($scope);
    
    // console.log("$scope.pc.parentValue:",$scope.pc.parentValue);
    // $scope.pc.parentValue=5;
    // console.log("******CHANGED: $scope.pc.parentValue=5;***");
    // console.log("$scope.pc.parentValue:",$scope.pc.parentValue);
    // console.log("$scope",$scope);
    // }
    
    ParentController2.$inject=['$scope'];
    function ParentController2($scope){
    var parent=this;
    parent.value=1;
    
    }
    ChildController2.$inject=['$scope'];
    function ChildController2($scope){
    var child=this;
    child.value=5;
    console.log("Child controller2 scope:",$scope);
    }
    
    })();