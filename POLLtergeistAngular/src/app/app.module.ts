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
import { PollspageComponent } from './internal/create/createpollspage/pollspage.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { EdupageComponent } from './home/edupage/edupage.component';
import { PollsComponent } from './internal/polls/polls.component';
import { SurveysComponent } from './internal/surveys/surveys.component';
import { SharedinternalComponent } from './internal/sharedinternal/sharedinternal.component';
import { CreateSurveyComponent } from './internal/create/create-survey/create-survey.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { InternalheaderComponent } from './internal/internalnavbar/internalheader/internalheader.component';
import { DraftsComponent } from './internal/drafts/drafts.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { CreateAccountComponent } from './login/create-account/create-account.component';
import { AccountComponent } from './internal/account/account.component';

//import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatInputModule} from '@angular/material/input';
import{MatNativeDateModule} from '@angular/material/core'

//angular material library
import { MaterialModule } from './internal/material.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
//angular material forms
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { OptionFormComponent } from './option-form/option-form.component';
import { NestedOptionComponent } from './nested-option/nested-option.component';
import { ViewpollComponent } from './internal/viewpoll/viewpoll.component';
import { PolldataComponent } from './internal/polldata/polldata.component';
import { ViewsurveyComponent } from './internal/viewsurvey/viewsurvey.component';
import { AccountInfoComponent } from './internal/account-info/account-info.component';
import { Viewpoll2Component } from './internal/viewpoll2/viewpoll2.component';
import { Viewpoll3Component } from './internal/viewpoll3/viewpoll3.component';
import { Polldata2Component } from './internal/polldata2/polldata2.component';
import { Polldata3Component } from './internal/polldata3/polldata3.component';



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
    CreateSurveyComponent,
    SurveysComponent,
    DraftsComponent,
    OptionFormComponent,
    NestedOptionComponent,
    ViewpollComponent,
    AccountComponent,
    LoginPageComponent,
    SignUpComponent,
    CreateAccountComponent,
    PolldataComponent,
    ViewsurveyComponent,
    AccountComponent,
    AccountInfoComponent,
    Viewpoll2Component,
    Viewpoll3Component,
    Polldata2Component,
    Polldata3Component
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    InternalModule,
    LoginModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,MatInputModule,MatNativeDateModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCheckboxModule,
    FormsModule,
/*  commented out routing paths in routing module now 
    RouterModule.forRoot([{path: '', component: HomepageComponent}, 
                          {path:'education', component: EdupageComponent},
                          {path: '***', component: HomepageComponent },
                          {path: 'business', component:BusinesspackComponent},
                          {path: 'aboutus', component:AboutusComponent},
                          {path: 'pollspage', component:PollspageComponent},
                          {path:"polls", component: PollsComponent},
                          {path: "surveys", component: SurveysComponent},
                          {path:"newSurvey", component: CreateSurveyComponent}])

 */

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
