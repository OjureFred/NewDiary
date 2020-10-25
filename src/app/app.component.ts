import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  entries: string[];
  
  constructor() {
    this.entries = ["Watch Docker Tutorial", "Develop Simple Angular Application", "Finalize Hours and get project go-ahead from Charles"]
  }
}
