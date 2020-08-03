import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { EdupageComponent } from './home/edupage/edupage.component';
import { BusinesspackComponent } from './home/businesspack/businesspack.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { PollspageComponent } from './internal/create/createpollspage/pollspage.component';
import { PollsComponent } from './internal/polls/polls.component';
import { SurveysComponent } from './internal/surveys/surveys.component';
import { CreateSurveyComponent } from './internal/create/create-survey/create-survey.component';
import { DraftsComponent } from './internal/drafts/drafts.component';
import { ViewpollComponent } from './internal/viewpoll/viewpoll.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { CreateAccountComponent } from './login/create-account/create-account.component';
import { PolldataComponent } from './internal/polldata/polldata.component';
import { ViewsurveyComponent } from './internal/viewsurvey/viewsurvey.component';

const routes: Routes = [ {path: '', component: HomepageComponent}, 
{path:'education', component: EdupageComponent},
{path: '***', component: HomepageComponent },
{path: 'business', component:BusinesspackComponent},
{path: 'aboutus', component:AboutusComponent},
{path: 'pollspage', component:PollspageComponent},
{path: "polls", component: PollsComponent},
{path: "viewpoll", component: ViewpollComponent},
{path: "surveys", component: SurveysComponent},
{path: "newSurvey", component: CreateSurveyComponent},
{path: "drafts", component: DraftsComponent},
{path: 'login', component: LoginPageComponent},
{path: 'signup', component: SignUpComponent},
{path: 'createaccount', component: CreateAccountComponent},
{path: 'viewpolldata', component: PolldataComponent},
{path: 'viewsurvey', component: ViewsurveyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
