import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { InternalheaderService } from 'src/app/services/internalheader.service';


 

@Component({
  selector: 'app-edupage',
  templateUrl: './edupage.component.html',
  styleUrls: ['./edupage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EdupageComponent implements OnInit {

  constructor(public nav: HeaderService, public internalNav: InternalheaderService) {
    this.nav.show(); //shows homepage navbar
    this.internalNav.hide();  //hides internal navbar
   }
  edubook: any = "assets/img/EduPageBook.png";
  ngOnInit(): void {
  }

}
