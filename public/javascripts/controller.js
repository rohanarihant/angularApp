/** List Controller */

function listCtrl($scope, DTOptionsBuilder, DTColumnBuilder, $http, ListService) {

     $scope.vm = {};

     ListService.list(function (response) {
          $scope.userList = response;
          $scope.vm.dtOptions = DTOptionsBuilder.newOptions()
          .withOption('order', [0, 'asc']);
     });
}

angular
.module('testApp')
.controller ('listCtrl', listCtrl);
