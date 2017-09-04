// Interface implementation
var SelectProductController = (function () {
    // Constructor
    function SelectProductController($http) {
        this._httpService = $http;
        this.title = "From Select Product Controller";
        this.commercialType = "33";
        this.countryArray = [];
        this.selectedCountry = this.countryArray[2];
        this.stateArray = [];
        this.selectedState = this.stateArray[2];
        this.cityArray = [];
        this.selectedCity = this.cityArray[2];
        this.LoadDriverLicenseText = "Driver License";
        this.TypeText = "Type";
        this.SubTypeText = "Subtype";
        this.ReasonText = "Reason";
    }
    //****************** Load Countries *****************
    SelectProductController.prototype.LoadCountry = function () {
        var _this = this;
        this.LoadDriverLicenseText = "Load Country";
        this.TypeText = "Country";
        this.SubTypeText = "State";
        this.ReasonText = "Cities";
        this._httpService.get("/SelectProduct/GetCountry")
            .success(function (data, status) { return _this.countryArray = data; });
    };
    //****************** Load States *****************
    SelectProductController.prototype.LoadState = function () {
        var _this = this;
        this._httpService.post("/SelectProduct/GetStates", { selectedCountry: this.selectedCountry })
            .success(function (data, status) { return _this.stateArray = data; });
    };
    //****************** Load Cities *****************
    SelectProductController.prototype.LoadCity = function () {
        var _this = this;
        this._httpService.post("/SelectProduct/GetCity", { selectedState: this.selectedState })
            .success(function (data, status) { return _this.cityArray = data; });
    };
    return SelectProductController;
}());
angular.module("MvaDLS").controller("SelectProductController", SelectProductController);
//# sourceMappingURL=SelectProductController.js.map