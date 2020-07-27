import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { newSurvey } from './newSurvey';
import { MaterialModule } from '../../material.module';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})


export class CreateSurveyComponent implements OnInit {
  
  surveyForm:FormGroup;
  constructor(private elementRef: ElementRef, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.surveyForm= this.fb.group({
      freeResponse: this.fb.array([]),
      multipleChoice: this.fb.array([]),
      checkList: this.fb.array([])
    })

    this.surveyForm.valueChanges.subscribe(console.log)

  }

  get clForms(){
    return this.surveyForm.get('checkList') as FormArray
  }

  get mcForms(){
    return this.surveyForm.get('multipleChoice') as FormArray
  }

  get frqForms(){
    return this.surveyForm.get('freeResponse') as FormArray
  }

  addFRQ(){
    const newFRQ = this.fb.group({
      answer:[]
    })
    this.frqForms.push(newFRQ);
  }
  deleteFRQ(i) {
    this.frqForms.removeAt(i);
  }

  addMC(){
    const newMC = this.fb.group({
      answer:[]
    })
    this.mcForms.push(newMC);
  }
  deleteMC(i) {
    this.mcForms.removeAt(i);
  }

  addCL(){
    const newCL = this.fb.group({
      answer:[]
    })
    this.clForms.push(newCL);
  }
  deleteCL(i) {
    this.clForms.removeAt(i);
  }

}
