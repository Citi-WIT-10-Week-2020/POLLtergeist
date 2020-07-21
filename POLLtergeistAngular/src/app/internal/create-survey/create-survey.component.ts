import { Component, OnInit } from '@angular/core';
import {newSurvey} from './newSurvey'; 
import {MaterialModule} from '../material.module';
import {MatCheckboxModule} from '@angular/material/checkbox';




@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})


export class CreateSurveyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }


  onFreeResponse () {
    alert("hi");
  }

}
