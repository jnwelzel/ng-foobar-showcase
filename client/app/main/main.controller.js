'use strict';

angular.module('ngFoobarShowcaseApp')
  .controller('MainCtrl', ['$scope', 'ngFoobar', function ($scope, ngFoobar) {
    $scope.autoClose = false;
    $scope.displayTime = 3;

    $scope.colorContext = 'success';
    $scope.fontColor = '#3C763D';
    $scope.backgroundColor = '#DFF0D8';
    $scope.borderColor = '#D6E9C6';

    $scope.opacity = 0.9;

    $scope.currentDate = new Date();

    $scope.showMessage = function(context, message) {
      ngFoobar.show(context, message);
    };

    $scope.setAutoClose = function() {
      ngFoobar.setAutoClose($scope.autoClose, $scope.displayTime);
    };

    $scope.setColors = function() {
      console.log('setColors %s %s %s %s', $scope.colorContext, $scope.fontColor,
        $scope.backgroundColor, $scope.borderColor);
      ngFoobar.setColors($scope.colorContext, {color: $scope.fontColor,
        background: $scope.backgroundColor, border: $scope.borderColor});
    };

    $scope.resetColors = function() {
      ngFoobar.resetColors();
      $scope.colorContext = 'success';
      $scope.fontColor = '#3C763D';
      $scope.backgroundColor = '#DFF0D8';
      $scope.borderColor = '#D6E9C6';
    };

    $scope.setOpacity = function() {
      ngFoobar.setOpacity($scope.opacity);
    };

  }]);
