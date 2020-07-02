import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  constructor() { }

  imageWidthLogo: number = 800;
  imageMarginLogo: number = 110; 
  HomePageLogo: any = "assets/img/HomePageLogo.png"

  imageWidthEP: number = 300; 
  imageMarginEP: number = 50; 
  EducationPackage: any = "assets/img/EducationPackage.png"

  imageWidthBP: number = 300; 
  imageMarginBP: number = 50; 
  BusinessPackage: any = "assets/img/BusinessPackage.png"

  ngOnInit(): void {
  }

}
