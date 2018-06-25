"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var userPreferences_service_1 = require("./userPreferences.service");
var EmployeeListComponent = /** @class */ (function () {
    // private _userPreferencesService: UserPreferencesService;
    function EmployeeListComponent(_employeeService, _userPreferencesService) {
        //this.employees = this._employeeService.getEmployees();
        this._employeeService = _employeeService;
        this._userPreferencesService = _userPreferencesService;
        this.selectedEmployeeCountRadioButton = 'all';
        this.statusMessage = 'Loading data. Please wait....';
        //    this._userPreferencesService = new UserPreferencesService();
    }
    Object.defineProperty(EmployeeListComponent.prototype, "colour", {
        get: function () {
            return this._userPreferencesService.colourPreference;
        },
        set: function (value) {
            this._userPreferencesService.colourPreference = value;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.employees = this._employeeService.getEmployees();
        this._employeeService.getEmployees()
            .subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) {
            _this.statusMessage = 'Problem with the service. Please try again.';
            console.error(error);
        });
    };
    // constructor() {
    //this.employees =
    //    [
    //        { code: 'emp01', name: 'Tom', gender: 'male', salary: 3000, dateofbirth: '5/6/1998' },
    //        { code: 'emp02', name: 'alex', gender: 'male', salary: 4000, dateofbirth: '2/6/1997' },
    //        { code: 'emp03', name: 'mike', gender: 'female', salary: 5000, dateofbirth: '5/6/1996' },
    //        { code: 'emp04', name: 'mary', gender: 'female', salary: 6000, dateofbirth: '6/1/1995' },
    //        { code: 'emp05', name: 'nancy', gender: 'female', salary: 7000, dateofbirth: '1/6/1995' },
    //    ];
    // }
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChanged = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'male'; }).length;
    };
    EmployeeListComponent.prototype.getTotalFeMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'female'; }).length;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css']
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService,
            userPreferences_service_1.UserPreferencesService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map