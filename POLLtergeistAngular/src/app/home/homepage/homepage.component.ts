import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { InternalheaderService } from 'src/app/services/internalheader.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {
 

  constructor(public nav: HeaderService, public internalNav: InternalheaderService, private router:Router) { }

  imageWidthLogo: number = 1100;
  imageMarginLogo: number = 110; 
  HomePageLogo: any = "assets/img/HomePageLogo.png"

  imageWidthEP: number = 500; 
  imageMarginEP: number = 20; 
  EducationPackage: any = "assets/img/EducationPackage.png"

  imageWidthBP: number = 500; 
  imageMarginBP: number = 20; 
  BusinessPackage: any = "assets/img/BusinessPackage.png"

  ngOnInit(): void {

    this.nav.show();
    this.internalNav.hide(); 
  
  }


  onEdu() {
    this.router.navigate(['education']);
  }


  onBus() {
    this.router.navigate(['business']);
  }

}
