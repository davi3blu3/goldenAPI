var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('filmlist', {
            url: '/',
            templateUrl: 'templates/filmlist.html',
            resolve: {
                films: function(FilmService) {
                    console.log('FilmService called');
                    return FilmService.getAllFilms();
                }
            }
        })
        .state('film', {
            url: '/film/:filmId',
            templateUrl: 'templates/film.html',
            resolve: {
                film: function(FilmService, $transitions$) {
                    console.log('single film called');
                    return FilmService.getFilm($transition$.params().filmId);
                }
            }
        });

    // $urlRouterProvider.otherwise('/');    
})
