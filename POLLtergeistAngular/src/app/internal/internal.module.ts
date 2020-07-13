import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollsComponent } from './polls/polls.component';
import { ClickColorDirective } from './polls/click-color.directive';



@NgModule({
  declarations: [PollsComponent, ClickColorDirective],
  imports: [
    CommonModule
  ]
})
export class InternalModule { }
