import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { MaterialModule } from '../internal/material.module';



@NgModule({
  declarations: [
    LoginHeaderComponent
  ],
  exports: [
    LoginHeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LoginModule { }
