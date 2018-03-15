var app = angular.module("rubick", ["ngRoute", "ngMaterial", "ngMessages", "ngMaterialDatePicker"]);
app.config(function($routeProvider, $mdThemingProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/views/seguro/seguroTest.html"
    })
    .when("/london", {
        templateUrl : "app/views/london.html"
    })
    .when("/paris", {
        templateUrl : "app/views/paris.html"
    })
    .when("/task/create", {
        templateUrl : "app/views/task/create.html"
    })
    .otherwise({
        redirectTo : "/"
    });

}); 