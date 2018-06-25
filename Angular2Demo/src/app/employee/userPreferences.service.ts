import { Injectable } from '@angular/core';

@Injectable()
export class UserPreferencesService {
    constructor()
    {
        console.log('new instance of service created.')
    }

    colourPreference: string = 'orange';
}