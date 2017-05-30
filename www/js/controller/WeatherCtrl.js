app.controller('WeatherCtrl', function($scope, $http) {

    $scope.search = function() {
        var appid = "555f2a1d504b2f6eeae38744267aef59";
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + $scope.city + "&appid=" + appid + "&units=metric";
        console.log(url);
        $http.get(url).success(httpSuccess).error(function() {
            alert("Impossible de récupérer l'information");
        });
    }

    httpSuccess = function(res) {
        alert(1);
        console.log(res.weather);
        $scope.weather = res;
    }

});