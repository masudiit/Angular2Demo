﻿import { Component } from '@angular/core';
import { UserPreferencesService } from '../employee/userPreferences.service';

@Component({
    template: `<h1>This is the home page</h1>
    <div> 
     Color Preference: 
       <input type='text' [(ngModel)]='colour' [style.background]='colour'/>
   </div>
       `
})
export class HomeComponent
{
   // private _userPreferencesService: UserPreferencesService;

    constructor(private _userPreferencesService: UserPreferencesService)
    {
      //  this._userPreferencesService = new UserPreferencesService();
    }

    get colour(): string
    {
        return this._userPreferencesService.colourPreference;
    }

    set colour(value:string)
    {
         this._userPreferencesService.colourPreference = value;
    }

}