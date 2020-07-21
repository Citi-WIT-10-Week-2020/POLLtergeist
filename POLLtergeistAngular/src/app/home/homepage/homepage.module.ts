import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';
import { EdupageComponent } from '../edupage/edupage.component';
import { MaterialModule } from 'src/app/internal/material.module';





@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
  
})
export class HomepageModule { }
