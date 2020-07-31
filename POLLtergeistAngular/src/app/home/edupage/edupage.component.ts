import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { InternalheaderService } from 'src/app/services/internalheader.service';


 

@Component({
  selector: 'app-edupage',
  //uses common html and scss
  templateUrl: './edupage.component.html',
  styleUrls: ['./edupage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EdupageComponent implements OnInit {

  constructor(public nav: HeaderService, public internalNav: InternalheaderService) {
    this.nav.show(); //shows homepage navbar
    this.internalNav.hide();  //hides internal navbar
   }

  imagePresent: boolean = true;
  title: string = "education package";
  imageLocation: any = "assets/img/EduPageBook.png";
  body: string = `With the education package colleges, universities, and other educational 
  organizations can post important announcements about updates and changes within the school. 
 Administration can host surveys and polls to connect with students and get honest feedback. 
  Increase student involvement today with POLLtergeist!`

  ngOnInit(): void {
  }

}
