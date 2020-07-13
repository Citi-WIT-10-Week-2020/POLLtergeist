import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-businesspack',
  template:`
  <app-header></app-header>
  
  <router-outlet></router-outlet>

  <app-footer></app-footer>
  `,
  templateUrl: './businesspack.component.html',
  styleUrls: ['./businesspack.component.scss']
})
export class BusinesspackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
