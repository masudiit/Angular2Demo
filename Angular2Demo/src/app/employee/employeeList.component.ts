import { Component,OnInit } from '@angular/core';
import { IEmployee } from './employee';
import {EmployeeService} from './employee.service';
import { UserPreferencesService } from './userPreferences.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
   
})
export class EmployeeListComponent implements OnInit {
   // employees: any[];
    employees: IEmployee[];
    selectedEmployeeCountRadioButton:string = 'all';
    statusMessage: string ='Loading data. Please wait....'
   // private _userPreferencesService: UserPreferencesService;


    constructor(private _employeeService: EmployeeService,
        private _userPreferencesService: UserPreferencesService)
    {
        //this.employees = this._employeeService.getEmployees();

    //    this._userPreferencesService = new UserPreferencesService();
    }
    get colour(): string {
        return this._userPreferencesService.colourPreference;
    }

    set colour(value: string) {
        this._userPreferencesService.colourPreference = value;
    }

    ngOnInit()
    {
       // this.employees = this._employeeService.getEmployees();
        this._employeeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData,
            (error) =>
            {
                this.statusMessage = 'Problem with the service. Please try again.';
                console.error(error);
            });
    }

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

    onEmployeeCountRadioButtonChanged(selectedRadioButtonValue: string): void
    {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    getTotalEmployeesCount(): number
    {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e=>e.gender==='male').length;
    }

    getTotalFeMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'female').length;
    }

    //getEmployees(): void
    //{
    //    this.employees =
    //        [
    //            { code: 'emp01', name: 'Tom', gender: 'male', salary: 3000, dateofbirth: '25/6/1998' },
    //            { code: 'emp02', name: 'alex', gender: 'male', salary: 4000, dateofbirth: '2/6/1997' },
    //            { code: 'emp03', name: 'mike', gender: 'male', salary: 5000, dateofbirth: '5/6/1996' },
    //            { code: 'emp04', name: 'mary', gender: 'female', salary: 6000, dateofbirth: '6/1/1995' },
    //            { code: 'emp05', name: 'nancy', gender: 'female', salary: 7000, dateofbirth: '15/6/1995' },
    //        ];
    //}

    //trackByEmpCode(index: number, employee: any): string
    //{
    //    return employee.code;
    //}

}