var app = angular.module('myApp', []);
app.controller('myController',
    function ($scope, $http) {

        var request = {
            method: 'get',
            url: '../Data/hangkhac.json',
            dataType: 'json',
            contentType: "application/json"
        };
        $http(request)
            .success(function (jsonData) {
                $scope.list = jsonData;
            })
            .error(function () {

            });
    });