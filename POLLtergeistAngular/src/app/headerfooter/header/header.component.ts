import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public nav: HeaderService,  private router:Router) { }

  ngOnInit(): void {
  }


  backHome() {
    this.router.navigate(['']);
  }

}
