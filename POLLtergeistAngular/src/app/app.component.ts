import { Component } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
<<<<<<< Updated upstream
  selector: 'app-root',  
  template:`
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss']
=======
  selector: 'app-root',
  template: `
    
    <app-header></app-header>
    <app-footer></app-footer>

    <router-outlet></router-outlet>
   
     
    `,
  styles:[]
>>>>>>> Stashed changes
})
export class AppComponent {
  constructor() { }

  ngOnInit(): void {
  }
  title = 'polltergeist';
}


