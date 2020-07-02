import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginHeaderComponent } from './login-header/login-header.component';



@NgModule({
  declarations: [
    LoginHeaderComponent
  ],
  exports: [
    LoginHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
