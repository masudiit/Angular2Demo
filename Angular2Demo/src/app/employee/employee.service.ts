import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http ,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService
{

    constructor(private _http:Http){}

    getEmployees():Observable <IEmployee[]>
    {
        return this._http.get("http://localhost:47132/api/employees")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);       
    }

    getEmployeeByCode(empCode:string): Observable<IEmployee> {
        return this._http.get("http://localhost:47132/api/employees/"+ empCode)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);
    }

  

    handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error);
    }

   /* // For Promise use
    getEmployeeByCode(empCode: string): Promise<IEmployee> {
        return this._http.get("http://localhost:47132/api/employees/" + empCode)    
            .map((response) => response.json())
            .toPromise()
            .catch(this.handlePromiseError);
    }

    handlePromiseError(error: Response) {
        console.error(error);
        throw (error);
    }
*/

  //  getEmployees(): IEmployee[] {

        //return [
        //    { code: 'emp01', name: 'Tom', gender: 'male', salary: 2000, dateofbirth: '5/6/1998' },
        //    { code: 'emp02', name: 'alex', gender: 'male', salary: 4000, dateofbirth: '2/6/1997' },
        //    { code: 'emp03', name: 'mike', gender: 'female', salary: 5000, dateofbirth: '5/6/1996' },
        //    { code: 'emp04', name: 'mary', gender: 'female', salary: 6000, dateofbirth: '6/1/1995' },
        //    { code: 'emp05', name: 'nancy', gender: 'female', salary: 7000, dateofbirth: '1/6/1995' },
        //];
   // }

}