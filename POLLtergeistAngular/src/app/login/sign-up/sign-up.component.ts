import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { InternalheaderService } from 'src/app/services/internalheader.service';
import { AngularMaterialModule } from 'src/app/login/angular-material.module';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public nav: HeaderService, public internalNav: InternalheaderService, private router:Router) { }

  ngOnInit(): void {
    this.nav.show();
    this.internalNav.hide();
  }

}
