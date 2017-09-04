interface ISelectProductController { // Interface 
    title: string;

    commercialType: string;
    countryArray: Array<string>;
    selectedCountry: string;

    stateArray: Array<string>;
    selectedState: string;

    cityArray: Array<string>;
    selectedCity: string;

    LoadDriverLicenseText: string;
    TypeText: string;
    SubTypeText: string;
    ReasonText: string;

}

// Interface implementation
class SelectProductController implements ISelectProductController {
    title: string;
    commercialType: string;

    countryArray: Array<string>;
    selectedCountry: string;

    stateArray: Array<string>;
    selectedState: string;

    cityArray: Array<string>;
    selectedCity: string;

    _httpService: ng.IHttpService;

    LoadDriverLicenseText: string;
    TypeText: string;
    SubTypeText: string;
    ReasonText: string;
    
    // Constructor
    constructor($http: ng.IHttpService) { // $http service as Dependency injection
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
    LoadCountry(): void {
        this.LoadDriverLicenseText = "Load Country";
        this.TypeText = "Country";
        this.SubTypeText = "State";
        this.ReasonText = "Cities";
        this._httpService.get("/SelectProduct/GetCountry")
            .success((data: Array<string>, status) => this.countryArray = data); 
    }
     //****************** Load States *****************
    LoadState(): void {
        this._httpService.post("/SelectProduct/GetStates", { selectedCountry: this.selectedCountry })
            .success((data: Array<string>, status) => this.stateArray = data); 
    }

    //****************** Load Cities *****************
    LoadCity(): void {
        this._httpService.post("/SelectProduct/GetCity", { selectedState: this.selectedState })
            .success((data: Array<string>, status) => this.cityArray = data);
    }

}
angular.module("MvaDLS").controller("SelectProductController", SelectProductController);