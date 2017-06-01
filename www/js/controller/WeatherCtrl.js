app.controller('WeatherCtrl', function($scope, $http) {

    $scope.Math = Math;
    $scope.loader = false;
    $scope.found = false;

    $scope.search = function() {
        var appid = "555f2a1d504b2f6eeae38744267aef59";
        var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + $scope.city + "&appid=" + appid + "&units=metric";
        $scope.loader = true;
        $http.get(url).success(httpSuccess).error(function() {
            $scope.loader = false;
            alert("Impossible de récupérer l'information");
        });
    }

    httpSuccess = function(res) {
        $scope.loader = false;
        $scope.found = true;
        $scope.weather = res;
    }

    $scope.city = "Paris";
    $scope.search();

});