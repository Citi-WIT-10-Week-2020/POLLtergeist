import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollsComponent } from './polls/polls.component';



@NgModule({
  declarations: [PollsComponent],
  imports: [
    CommonModule
  ]
})
export class InternalModule { }
