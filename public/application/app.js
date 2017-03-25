var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/filmlist');

    var states = [
        {
            name: 'filmlist',
            url: '/filmlist',
            component: 'filmlist',
            resolve: {
                films: function(FilmService) {
                    console.log('FilmService called');
                    return FilmService.getAllFilms();
                }
            }
        },
        {
            name: 'film',
            url: '/film/{filmId}',
            component: 'film',
            resolve: {
                film: function(FilmService, $transitions$) {
                    return FilmService.getFilm($transition$.params().filmId);
                }
            }
        }
    ];

    states.forEach(function(state) {
        $stateProvider.state(state);
        console.log('registered ', state);
    })
})
