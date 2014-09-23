'use strict';

angular.module('ngFoobarShowcaseApp')
  .controller('MainCtrl', ['$scope', 'ngFoobar', function ($scope, ngFoobar) {
    $scope.showMessage = function(context, message) {
      ngFoobar.show(context, message);
    };
  }]);
