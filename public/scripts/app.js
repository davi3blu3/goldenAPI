angular.module('myApp', ['ngRoute'])

.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '../templates/filmlist.html',
        controller: 'MyController'
    })
})


.controller('MyController', MyController);

function MyController($scope, $http){

    $http.get('/bondfilms').then(function(response) {
        $scope.films = response.data;
        console.log($scope.films);
    })
}