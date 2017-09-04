module app {
    var main = angular.module("MvaDLS", ["ngRoute", "ui.bootstrap"])
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];

    function routeConfig($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider
            .when('/SelectProduct',
            {
                templateUrl: '/Templates/SelectProduct.html',
                controller: 'SelectProductController as vm'
            })
            .when('/CustomerTracking',
            {
                templateUrl: '/Templates/CustomerTracking.html',
                controller: 'CustomerTrackingController as vm'
            })
    }
}