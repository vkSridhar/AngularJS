interface ICustomerTrackingController {
    title: string;
    _modalService;
}

class CustomerTrackingController implements ICustomerTrackingController {
    title: string;
    _modalService;
    constructor($http: ng.IHttpService, $uibModal) { // Inject Modal service
        this.title = "From Customer Tracking Controller";
        this._modalService = $uibModal;
    }

    LoadModalDialog(): void {
        var modalInstance =this._modalService.open({ // Open Dialog
            templateUrl: '/Templates/CapturePhoto.html', // Path of the dialog template.
            size:'lg'
        });
    }
   
}
angular.module("MvaDLS").controller("CustomerTrackingController", CustomerTrackingController);