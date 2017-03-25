angular.module('myApp').component('film', {
  bindings: { film: '<' },
  template: '<h3>A film!</h3>' +
  
            '<div>Name: {{$ctrl.film.name}}</div>' +
            '<div>Id: {{$ctrl.film.id}}</div>' +
            '<div>Company: {{$ctrl.film.company}}</div>' +
            '<div>Email: {{$ctrl.film.email}}</div>' +
            '<div>Address: {{$ctrl.film.address}}</div>' +
            
            '<button ui-sref="people">Close</button>'
});