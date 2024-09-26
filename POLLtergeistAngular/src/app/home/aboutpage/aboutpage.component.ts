import { Component, OnInit, ViewEncapsulation } from '@angular/core';


 

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EdupageComponent implements OnInit {

  constructor() { }
  edubook: any = "assets/img/AboutPageBook.png";
  ngOnInit(): void {
  }

}
