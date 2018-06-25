
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeeCount.component.css']
})
export class EmployeeCountComponent
{  
    @Input()
    all: number;
    @Input()
    male: number;
    @Input()
    female: number;



    selectRadioButtonValue: string = 'all';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string>= new EventEmitter<string>();

    onRadioButtonSelectionChange()
    {
        this.countRadioButtonSelectionChanged.emit(this.selectRadioButtonValue);
        console.log(this.selectRadioButtonValue);
    }


    

}