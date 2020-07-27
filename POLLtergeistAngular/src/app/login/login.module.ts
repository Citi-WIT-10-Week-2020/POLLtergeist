import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { MaterialModule } from '../internal/material.module';



@NgModule({
  declarations: [

  ],
  exports: [

  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LoginModule { }
