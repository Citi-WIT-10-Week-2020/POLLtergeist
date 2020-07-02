import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupHeaderComponent } from './login-signup-header/login-signup-header.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupHeaderComponent,
    SignupLoginComponent,
    LoginSignupComponent,
    CreateAccountComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
