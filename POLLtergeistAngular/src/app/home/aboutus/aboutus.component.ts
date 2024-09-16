import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { InternalheaderService } from 'src/app/services/internalheader.service';

@Component({
  selector: 'app-aboutus',
  //templateUrl: './aboutus.component.html',
  //styleUrls: ['./aboutus.component.scss']

  //uses common html and scss
  templateUrl: '../edupage/edupage.component.html',
  styleUrls: ['../edupage/edupage.component.scss']
})
export class AboutusComponent implements OnInit {

  title: string = "about us";
  imageLocation: any = "";
  imagePresent: boolean = false;
  body: string = " POLLtergeist is a web app that combines surveys, " +
        "polls, announcement posts to generate anonymous " +
        "feedback from employees for small and medium-sized companies and organizations." +

        "At POLLtergeist we create a platform for users " +
        "to voice their opinions, give feedback, survey, " +
        "create polls, and messages in order to encourage " +
        "positive and productive communication for the future. "; 

  constructor(public internalNav: InternalheaderService, public nav: HeaderService) { }

  ngOnInit(): void {
    this.nav.show(); //shows homepage navbar
    this.internalNav.hide(); //hides internal element navbar
  }

}
