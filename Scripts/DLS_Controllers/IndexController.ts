interface IIndexController {
    title: string;
}

//Using $scope
class IndexController implements IIndexController {
    scope: any;
    title: string;
    constructor($scope: ng.IScope) {
        this.scope = $scope;
        this.scope.title = "From Index Controller";
     
    }
}
angular.module("MvaDLS").controller("IndexController", IndexController);