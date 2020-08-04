import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternalheaderService } from 'src/app/services/internalheader.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-polldata2',
  templateUrl: './polldata2.component.html',
  styleUrls: ['./polldata2.component.scss']
})
export class Polldata2Component implements OnInit {

  title: string = "Favorite Shows";
  constructor(private router: Router, public internalNav: InternalheaderService, public nav: HeaderService) { }

  ngOnInit(): void {
    this.nav.hide(); //hides homepage navbar
    this.internalNav.show(); //shows internal elements navbar 
  }


  viewPoll() {
    this.router.navigate(['viewpoll2']);
  }
}
