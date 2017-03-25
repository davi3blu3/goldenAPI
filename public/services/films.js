angular.module('myApp').service('FilmService', function($http) {
    var service = {
        getAllFilms: function() {
            return $http.get('/bondfilms', { cache: true }).then(function(response) {
                return response.data;
            })
        },

        getFilm: function(id) {
            function filmMatchesParam(film) {
                return film.id === id;
            }

            return service.getAllFilms().then(function (film) {
                return film.find(filmMatchesParam)
            });
        }
    }

    return service;
})


   
