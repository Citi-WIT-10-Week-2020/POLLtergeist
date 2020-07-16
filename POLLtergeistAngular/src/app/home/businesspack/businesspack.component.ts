import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { InternalheaderService } from 'src/app/services/internalheader.service';

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

  constructor(public internalNav: InternalheaderService, public nav: HeaderService) { }

  ngOnInit(): void {
    this.nav.show(); //shows homepage navbar
    this.internalNav.hide(); //hides internal navbar
  }

}
