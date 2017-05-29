document.addEventListener(deviceready, function() {

}, false);

var app = angular.module('app', []);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', { templateUrl: 'partials/home.html' })
        .when('/about', { templateUrl: 'partials/about.html' })
        .otherwise({ redirectTo: '/home' });
});