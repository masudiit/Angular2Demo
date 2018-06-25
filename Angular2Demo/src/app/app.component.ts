import { Component } from "@angular/core";


@Component({
    selector: 'my-app',
    template: `
                <div style="padding:5px">
                      <ul class="nav nav-tabs">
                         <li routerLinkActive="active"> <a routerLink="home">Home</a></li>
                         <li routerLinkActive="active"> <a routerLink="employees">Employees</a></li> 
                         <li routerLinkActive="active"></li> 
                      </ul>
                   <router-outlet></router-outlet>
                </div>



                 <div>
                   <h1> {{getFullName}}</h1>
                   <img src='http://pragimtech.com/{{imagePath}}'/>
                  


               <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>  
                <button [disabled]='isDisabled'>ClickMe </button>
                <div>{{badhTML}}</div>
                <div [innerHtml]='badhTML'></div>
                
                  <button class="colorClass" [class]='classesToApply' >My Button</button>
                  <br/>   <br/>   <span>Single class</span>     
                  <button class="colorClass" [class.boldClass]='applyBoldClass' >My Button</button>
                 <br/>   <br/> <span>Multiple class</span>
                  <button class="colorClass" [ngClass]='addClasses()' >My Button</button>
                 <br/>   <br/>   <span>Single class style</span>     
                  <button style='color:red' [style.font-weight]="isBold?'bold':'normal'" >My Button</button>
                 <br/>   <br/> 
                  <button style='color:red' [style.font-size.px]="fontSize" >My Button</button>
                   <br/>  

   <button (click)='onClick()'>Click me</button>
 <br/>  
<input [(ngModel)]='nameX'/>
<br/>
You entered: {{nameX}}
<br/>

Your Test: <input type='text' [(ngModel)]='userText'/>
 <br/>  <br/> 
<simple [simpleInput]='userText'></simple>

                   </div>`
})
export class AppComponent {

    userText: string = 'Pragim';
    nameX: string = 'Initial Data';

    onClick(): void {
        alert('');
    }

    isBold: boolean = true;
    fontSize: number = 30;


    classesToApply: string = 'italicClass boldClass';
    applyBoldClass: boolean = true;
    applyItalicClass: boolean = true;

    addClasses() {
        let classes =
            {
                boldClass: this.applyBoldClass,
                italicClass: this.applyItalicClass
            };
        return classes;
    }


    pageHeader: string = "Employee Details";
    imagePath: string = 'Images/Logo.JPG'
    isDisabled: boolean = false;
    badhTML: string = 'HELLO <script>alert("hACKED");</script> world';

    firstName: string = 'MASUD';
    lastName: string = 'rahman';
    getFullname(): string {
        return this.firstName + ' xxx' + this.lastName;
    }


}