import { Component, OnInit, ViewEncapsulation } from '@angular/core';


 

@Component({
  selector: 'app-edupage',
  templateUrl: './edupage.component.html',
  styleUrls: ['./edupage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EdupageComponent implements OnInit {

  constructor() { }
  edubook: any = "assets/img/EduPageBook.png";
  ngOnInit(): void {
  }

}
