document.addEventListener(deviceready, function() {
    navigator.splashscreen.hide();
}, false);

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $routeProvider
        .when('/home', { templateUrl: 'partials/home.html' })
        .when('/about', { templateUrl: 'partials/about.html' })
        .otherwise({ redirectTo: '/home' });
}]);