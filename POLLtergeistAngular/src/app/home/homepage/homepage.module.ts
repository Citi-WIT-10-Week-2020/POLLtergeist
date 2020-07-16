import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';
import { EdupageComponent } from '../edupage/edupage.component';





@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule
  ]
  
})
export class HomepageModule { }
