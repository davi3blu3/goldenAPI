angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/films');

    var states = [
        {
            name: 'films',
            url: '/films',
            component: 'filmlist',
            resolve: {
                films: function(FilmService) {
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
    })
})
