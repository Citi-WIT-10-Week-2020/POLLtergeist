import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomepageModule } from './home/homepage/homepage.module';
import { InternalModule } from './internal/internal.module';
import { LoginModule } from './login/login.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { EdupageComponent } from './home/edupage/edupage.component';
import { BusPageComponent } from './home/bus-page/bus-page.component';




@NgModule({
  declarations: [
    AppComponent,
    EdupageComponent,
    BusPageComponent,
    
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    InternalModule,
    LoginModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{path: '', component: HomepageComponent}, 
                          {path:'education', component: EdupageComponent},
                          {path: '***', component: HomepageComponent },
                        {path: 'business', component:BusPageComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
