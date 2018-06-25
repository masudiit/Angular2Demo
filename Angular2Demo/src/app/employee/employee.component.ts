import { Component,OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { ActivatedRoute ,Router} from '@angular/router';
import { EmployeeService } from './employee.service';

import { ISubscription } from "rxjs/Subscription";

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retrywhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';


 //  styles: ['table{color: #369;font-family: Arial, Arial, Helvetica, sans-serif; font-size: large;border-collapse:collapse; font-style:normal;} td{border: 1px solid black;}']
@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css'],

})
export class EmployeeComponent implements OnInit
{
    employee: IEmployee;
    statusMessage: string = 'Loading employee data. Please wait...';

    subscription: ISubscription;

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router:Router
     )
    {

    }


    onBackButtonClick(): void
    {
        this._router.navigate(['/employees'])
    }

    onCancelButtonClick(): void {
        this.statusMessage = 'Request Cancelled';
        this.subscription.unsubscribe();
    }

    ngOnInit()
    {
        let empCode:string= this._activatedRoute.snapshot.params['code'];
        this.subscription= this._employeeService.getEmployeeByCode(empCode)         
            .retryWhen((err) =>
            {
                return err.scan((retryCount) =>
                {
                    retryCount += 1;
                    if (retryCount < 6)
                    {
                        this.statusMessage = 'Retrying...Attempt #' + retryCount;
                        return retryCount;
                    }
                    else {

                        throw (err);
                    }
                },0).delay(1000)
            })
            .subscribe(
            (employeeData) =>
            {
                if (employeeData == null)
                {
                    this.statusMessage = 'No data for employee code';
                }
                else
                this.employee = employeeData
            },
            (error) => {
                this.statusMessage = 'Problem with service!!';
                console.log(error);
            }
         );
    }

    /*
    //////For Promise use
    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode).then(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = 'No data for employee code';
                }
                else
                    this.employee = employeeData
            },          
        ).catch((error) => {
            this.statusMessage = 'Problem with service!!';
            console.log(error);
        });
    }
    */

    colSpanNum: number = 2;
    //firstName: string = 'Tom';
    //lastName: string = 'Hopkins';
    //gender: string= 'male';
    //age: number = 10;

    //showDetails: boolean = false;

    //toggleDetails(): void
    //{
    //    this.showDetails = !this.showDetails
    //}

}