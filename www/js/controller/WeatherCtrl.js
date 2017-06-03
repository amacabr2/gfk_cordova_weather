app.controller('WeatherCtrl', function($scope, $http, GeolocationService) {

    $scope.Math = Math;
    $scope.loader = false;
    $scope.panel = 0;
    $scope.id = 0;
    $scope.appid = "555f2a1d504b2f6eeae38744267aef59";

    $scope.search = function() {
        var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + $scope.city + "&appid=" + $scope.appid + "&units=metric";
        $scope.loader = true;
        $http.get(url).success(httpSuccess).error(httpError);
    }

    $scope.expand = function(e) {
        $elem = $(e.currentTarget);
        $elem.addClass('row-active').siblings().removeClass('row-active');
        $scope.id = $elem[0].id;
    }

    $scope.expanded = function(id) {
        return id == $scope.id;
    }

    $scope.geolocate = function() {
        $scope.loader = true;
        GeolocationService.getCurrentPosition(function(position) {
            var url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=" + $scope.appid + "&units=metric&cnt=10";
            $http.get(url).success(httpSuccess).error(httpError);
        });
    }

    httpSuccess = function(res) {
        $scope.panel = 1;
        $scope.loader = false;
        $scope.weather = res;
    }

    httpError = function(res) {
        $scope.loader = false;
        alert("Impossible de récupérer l'information");
    }

});