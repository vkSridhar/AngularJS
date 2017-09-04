var CustomerTrackingController = (function () {
    function CustomerTrackingController($http, $uibModal) {
        this.title = "From Customer Tracking Controller";
        this._modalService = $uibModal;
    }
    CustomerTrackingController.prototype.LoadModalDialog = function () {
        var modalInstance = this._modalService.open({
            templateUrl: '/Templates/CapturePhoto.html',
            size: 'lg'
        });
    };
    return CustomerTrackingController;
}());
angular.module("MvaDLS").controller("CustomerTrackingController", CustomerTrackingController);
//# sourceMappingURL=CustomerTracking.js.map