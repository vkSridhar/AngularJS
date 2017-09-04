//Using $scope
var IndexController = (function () {
    function IndexController($scope) {
        this.scope = $scope;
        this.scope.title = "From Index Controller";
    }
    return IndexController;
}());
angular.module("MvaDLS").controller("IndexController", IndexController);
//# sourceMappingURL=IndexController.js.map