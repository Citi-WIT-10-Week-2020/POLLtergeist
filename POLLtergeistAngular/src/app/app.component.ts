import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',  
  template:`
  <app-header></app-header>
  <app-internalheader></app-internalheader>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }

  ngOnInit(): void {
  }
  title = 'polltergeist';
}


