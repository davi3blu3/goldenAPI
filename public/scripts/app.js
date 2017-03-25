angular.module('myApp', []).controller('MyController', MyController);

function MyController($scope, $http){

    $http.get('/bondfilms').then(function(response) {
        $scope.films = response.data;
        console.log($scope.films);
    })
}