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
                film: function(FilmService, $stateParams) {
                    // return $stateParams.filmId;
                    return FilmService.getFilm($stateParams.filmId);
                }
            }
        })
        .state('newfilm', {
            url: '/newfilm',
            templateUrl: 'templates/newfilm.html'
        });

    $urlRouterProvider.otherwise('/');    
})
