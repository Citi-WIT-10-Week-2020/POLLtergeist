import { Component, OnInit } from '@angular/core';
import { InternalheaderService } from 'src/app/services/internalheader.service';
import { HeaderService } from 'src/app/services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polldata',
  templateUrl: './polldata.component.html',
  styleUrls: ['./polldata.component.scss']
})
export class PolldataComponent implements OnInit {

  title: string = "Work Environment";
  constructor(private router: Router, public internalNav: InternalheaderService, public nav: HeaderService) { }

  ngOnInit(): void {
    this.nav.hide(); //hides homepage navbar
    this.internalNav.show(); //shows internal elements navbar 
  }


  viewPoll() {
    this.router.navigate(['viewpoll']);
  }
}
