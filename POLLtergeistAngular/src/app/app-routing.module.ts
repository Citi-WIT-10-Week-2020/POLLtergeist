import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { EdupageComponent } from './home/edupage/edupage.component';
import { BusinesspackComponent } from './home/businesspack/businesspack.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { PollspageComponent } from './internal/createpollspage/pollspage.component';
import { PollsComponent } from './internal/polls/polls.component';
import { SurveysComponent } from './internal/surveys/surveys.component';
import { CreateSurveyComponent } from './internal/create-survey/create-survey.component';


const routes: Routes = [ {path: '', component: HomepageComponent}, 
{path:'education', component: EdupageComponent},
{path: '***', component: HomepageComponent },
{path: 'business', component:BusinesspackComponent},
{path: 'aboutus', component:AboutusComponent},
{path: 'pollspage', component:PollspageComponent},
{path:"polls", component: PollsComponent},
{path: "surveys", component: SurveysComponent},
{path:"newSurvey", component: CreateSurveyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
