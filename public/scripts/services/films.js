angular.module('myApp').service('FilmService', function($http) {
    var service = {
        getAllFilms: function() {
            return $http.get('/bondfilms', { cache: true }).then(function(response) {
                console.log(response.data);
                return response.data;
            })
        }
    }
})


   
