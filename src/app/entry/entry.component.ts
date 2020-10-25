import { Component, OnInit } from '@angular/core';

import { Entry } from '../entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  entries: Entry[] = [
    new Entry(1, 'Watch Tutorial','Watch Docker Tutorial', 3, new Date(2020, 10, 26), 'NS'),
    new Entry(2, 'DevelopApp', 'Develop Simple Angular Application', 4, new Date(2021, 1, 2), 'WIP'),
    new Entry(3, 'Negotiate Project', 'Finalize Hours and get project go-ahead from Charles', 1, new Date(2020, 11, 12), 'DONE')
  ];

  toggleDetails(index) {
    this.entries[index].showDetails = !this.entries[index].showDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
