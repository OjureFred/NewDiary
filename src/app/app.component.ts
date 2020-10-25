import { Component } from '@angular/core';

import { Entry } from './entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  entries: Entry[] = [
    { id: 1, description: 'Watch Docker Tutorial', date: new Date(2020, 10, 26)},
    { id: 2, description: 'Develop Simple Angular Application', date: new Date(2021, 1, 2)},
    { id: 3, description: 'Finalize Hours and get project go-ahead from Charles', date: new Date(2020, 11, 12)}
  ]

}
