angular.module('myApp')

.component('filmlist', {
    bindings: {films: '<'},

    template: `
        <div class="film">
            <h2>Render something, dammit!</h2>
            <ul>
                <li>anything ...</li>
                <li>(echo)anything ...</li>
                <li>(echo)anything ...</li>
            </ul>
        </div
        `
})


// '<div ng-repeat="film in $ctrl.films">' +
//                 '    <a ui-sref="/{{ film._id }}">' +
//                 '        <div class="film">' +
//                 '            <h2 id="title">{{ film.title }}</h3>' +
//                 '            <h3 id="year">{{ film.year }}</h3>' +
//                 '            <div id="stars">' +
//                 '                <p id="star" ng-repeat="star in film.stars">{{ star }}{{$last ? "" : ", "}}</p>' +
//                 '            </div>' +
//                 '            <p id="synopsis">{{ film.synopsis }}</p>' +
//                 '        </div>' +
//                 '    </a>' +
//                 '</div>'