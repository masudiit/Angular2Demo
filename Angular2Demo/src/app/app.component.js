"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.userText = 'Pragim';
        this.nameX = 'Initial Data';
        this.isBold = true;
        this.fontSize = 30;
        this.classesToApply = 'italicClass boldClass';
        this.applyBoldClass = true;
        this.applyItalicClass = true;
        this.pageHeader = "Employee Details";
        this.imagePath = 'Images/Logo.JPG';
        this.isDisabled = false;
        this.badhTML = 'HELLO <script>alert("hACKED");</script> world';
        this.firstName = 'MASUD';
        this.lastName = 'rahman';
    }
    AppComponent.prototype.onClick = function () {
        alert('');
    };
    AppComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        };
        return classes;
    };
    AppComponent.prototype.getFullname = function () {
        return this.firstName + ' xxx' + this.lastName;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n                <div style=\"padding:5px\">\n                      <ul class=\"nav nav-tabs\">\n                         <li routerLinkActive=\"active\"> <a routerLink=\"home\">Home</a></li>\n                         <li routerLinkActive=\"active\"> <a routerLink=\"employees\">Employees</a></li> \n                         <li routerLinkActive=\"active\"></li> \n                      </ul>\n                   <router-outlet></router-outlet>\n                </div>\n\n\n\n                 <div>\n                   <h1> {{getFullName}}</h1>\n                   <img src='http://pragimtech.com/{{imagePath}}'/>\n                  \n\n\n               <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>  \n                <button [disabled]='isDisabled'>ClickMe </button>\n                <div>{{badhTML}}</div>\n                <div [innerHtml]='badhTML'></div>\n                \n                  <button class=\"colorClass\" [class]='classesToApply' >My Button</button>\n                  <br/>   <br/>   <span>Single class</span>     \n                  <button class=\"colorClass\" [class.boldClass]='applyBoldClass' >My Button</button>\n                 <br/>   <br/> <span>Multiple class</span>\n                  <button class=\"colorClass\" [ngClass]='addClasses()' >My Button</button>\n                 <br/>   <br/>   <span>Single class style</span>     \n                  <button style='color:red' [style.font-weight]=\"isBold?'bold':'normal'\" >My Button</button>\n                 <br/>   <br/> \n                  <button style='color:red' [style.font-size.px]=\"fontSize\" >My Button</button>\n                   <br/>  \n\n   <button (click)='onClick()'>Click me</button>\n <br/>  \n<input [(ngModel)]='nameX'/>\n<br/>\nYou entered: {{nameX}}\n<br/>\n\nYour Test: <input type='text' [(ngModel)]='userText'/>\n <br/>  <br/> \n<simple [simpleInput]='userText'></simple>\n\n                   </div>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map