import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {
 

  constructor(private router:Router) { }

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
  }


  onEdu() {
    this.router.navigate(['education']);
  }


  onBus() {
    this.router.navigate(['business']);
  }

}
