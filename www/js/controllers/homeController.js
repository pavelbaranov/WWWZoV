/**
 * Created by Viacheslav on 11/30/2014.
 */

zovApp.controller('HomeController', ['$scope', function($scope) {
    $scope.greeting = 'Hello, World';

    $scope.showGreetingAlert = function(){
        alert($scope.greeting);
    }

}]);
