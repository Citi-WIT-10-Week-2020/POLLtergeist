import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
<<<<<<< Updated upstream
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
=======
  template:`
  <div class="navbar" style="background-color:#0466C8;width:1370px; height: 40px;">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="assets/img/jilly_ghost.png" width="30" height="40">
      </a>
      
      <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item is-size-4 has-text-white" style="font-family:Josefin Sans, sans-serif;">education</a>
        <a class="navbar-item is-size-4 has-text-white" style="font-family:josefin sans, sans-serif;">business</a>
        <a class="navbar-item is-size-4 has-text-white" style="font-family:josefin sans, sans-serif;">about</a>
      </div>
    </div>
        
        <a class="navbar-item is-size-4 has-text-white" style="background-color:#979DAC; border-radius: 30px; font-family:josefin sans, sans-serif;">signup</a>
        <a class="navbar-item is-size-4 has-text-white" style="background-color:#979DAC; border-radius: 30px; font-family:josefin sans, sans-serif;">login</a>
        </div>
      </div>
      
  

    `,
  styles:[`
  
  styleUrls: ['./header.component.scss']
`]
>>>>>>> Stashed changes
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
