import { Component, OnInit } from '@angular/core';

import { Entry } from '../entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  entries: Entry[] = [
    { id: 1, name: 'Watch Tutorial', description: 'Watch Docker Tutorial', days: 3, date: new Date(2020, 10, 26), status: 'NS' },
    { id: 2, name: 'DevelopApp', description: 'Develop Simple Angular Application', days: 4, date: new Date(2021, 1, 2), status: 'WIP' },
    {
      id: 3, name: 'Negotiate Project', description: 'Finalize Hours and get project go-ahead from Charles', days: 1,
      date: new Date(2020, 11, 12), status: 'DONE'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
