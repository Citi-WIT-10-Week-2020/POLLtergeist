import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomepageModule } from './homepage/homepage.module';
import { InternalModule } from './internal/internal.module';
import { LoginModule } from './login/login.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    InternalModule,
    LoginModule,
    RouterModule.forRoot([{path: '', component: HomepageComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
