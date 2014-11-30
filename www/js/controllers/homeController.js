/**
 * Created by Viacheslav on 11/30/2014.
 */

zovApp.controller('HomeController', ['$scope', function($scope) {
    $scope.greeting = 'Hello, World';

    $scope.carouselImages = ['../resources/testImages/test-img-0.jpg',
                            '../resources/testImages/test-img-1.jpg',
                            '../resources/testImages/test-img-2.jpg',
                            '../resources/testImages/test-img-3.jpg',
                            '../resources/testImages/test-img-4.jpg',
                            '../resources/testImages/test-img-5.jpg',
                            '../resources/testImages/test-img-6.jpg',
                            '../resources/testImages/test-img-7.jpg',
                            '../resources/testImages/test-img-8.jpg',
                            '../resources/testImages/test-img-9.jpg'];

    $scope.showGreetingAlert = function(){
        alert($scope.greeting);
    }

}]);
