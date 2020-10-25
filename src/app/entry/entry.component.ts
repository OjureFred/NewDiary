import { Component, OnInit } from '@angular/core';

import { Entry } from '../entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  entries: Entry[] = [
    { id: 1, description: 'Watch Docker Tutorial', date: new Date(2020, 10, 26) },
    { id: 2, description: 'Develop Simple Angular Application', date: new Date(2021, 1, 2) },
    { id: 3, description: 'Finalize Hours and get project go-ahead from Charles', date: new Date(2020, 11, 12) }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
