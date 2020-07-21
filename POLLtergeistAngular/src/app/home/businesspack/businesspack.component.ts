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
  //uses common html and scss
  //templateUrl: './businesspack.component.html',
  templateUrl: '../edupage/edupage.component.html',
 // styleUrls: ['./businesspack.component.scss']
  styleUrls: ['../edupage/edupage.component.scss']
})
export class BusinesspackComponent implements OnInit {

  title: string = "business package";
  imagePresent: boolean = true;
  imageLocation: any = "/assets/img/business.png";
  body: string = "The business package allows businesses and organizations" + 
  "to post important announcements and updates directly to employees." +
  "Managers and executives can host surveys and polls to connect with their employees" +
  "and get honest feedback about company policies. Increase employee involvement today with POLLtergeist!"

  constructor(public internalNav: InternalheaderService, public nav: HeaderService) { }

  ngOnInit(): void {
    this.nav.show(); //shows homepage navbar
    this.internalNav.hide(); //hides internal navbar
  }

}
