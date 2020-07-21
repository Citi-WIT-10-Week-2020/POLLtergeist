import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollsComponent } from './polls/polls.component';
import { ClickColorDirective } from './polls/click-color.directive';
import { MaterialModule } from './material.module';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { MatCheckbox } from '@angular/material/checkbox';




@NgModule({
  declarations: [PollsComponent, ClickColorDirective],
  imports: [
    CommonModule,
    MaterialModule
  ],

})
export class InternalModule { }
