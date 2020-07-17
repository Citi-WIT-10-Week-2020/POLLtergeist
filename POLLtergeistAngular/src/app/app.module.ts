import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomepageModule } from './home/homepage/homepage.module';
import { InternalModule } from './internal/internal.module';
import { LoginModule } from './login/login.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './headerfooter/header/header.component';
import { FooterComponent } from './headerfooter/footer/footer.component';
import { BusinesspackComponent } from './home/businesspack/businesspack.component';
import { PollspageComponent } from './internal/createpollspage/pollspage.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { EdupageComponent } from './home/edupage/edupage.component';
import { PollsComponent } from './internal/polls/polls.component';
import { SurveysComponent } from './internal/surveys/surveys.component';
import { SharedinternalComponent } from './internal/sharedinternal/sharedinternal.component';
import { CreateSurveyComponent } from './internal/create-survey/create-survey.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { InternalheaderComponent } from './internal/internalnavbar/internalheader/internalheader.component';
import { DraftsComponent } from './drafts/drafts.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BusinesspackComponent,
    PollspageComponent,
    EdupageComponent,
    AboutusComponent,
    InternalheaderComponent,
    DraftsComponent,
    
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
                          {path: 'business', component:BusinesspackComponent},
                          {path: 'aboutus', component:AboutusComponent},
                          {path: 'pollspage', component:PollspageComponent},
                          {path:"polls", component: PollsComponent},
                          {path: "surveys", component: SurveysComponent},
                          {path:"newSurvey", component: CreateSurveyComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
