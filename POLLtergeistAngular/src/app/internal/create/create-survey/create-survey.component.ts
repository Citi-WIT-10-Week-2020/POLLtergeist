import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { newSurvey } from './newSurvey';
import { MaterialModule } from '../../material.module';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InternalheaderService } from 'src/app/services/internalheader.service';


@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})


export class CreateSurveyComponent implements OnInit {
  
  sucess:boolean = false;
  surveyForm:FormGroup;
  constructor(public internalNav: InternalheaderService, private fb: FormBuilder, private router: Router) { }


  ngOnInit(): void {
    this.internalNav.show(); 
    this.surveyForm= this.fb.group({
      title: "",
      date: "",
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

  get answerArray() {
    return this.mcForms.get("answerChoices") as FormArray
  }

  addFRQ(){
    const newFRQ = this.fb.group({
      questionTitle:"",
      answer: ""
    })
    this.frqForms.push(newFRQ);
  }
  deleteFRQ(i) {
    this.frqForms.removeAt(i);
  }

  addMC(){
   let control = <FormArray>this.surveyForm.controls.multipleChoice;
   control.push(
     this.fb.group({
       questionTitle: [''],
       answerChoices: this.fb.array([])
     })
   )
  }
  deleteMC(i) {
    this.mcForms.removeAt(i);
  }

  getChoices(control){
    return control.get('answerChoices') as FormArray;
   // return this.surveyForm.get('checkList') as FormArray

  }

  addCLOption(control) {
    control.push (
      this.fb.group({
        answerChoice:''
      })
      
    )
    
  }

  deleteCLChoice(control, k) {
    control.removeAt(k);
  }

  addMCOption(control) {
    control.push (
      this.fb.group({
        answerChoice:''
      })
      
    )
    
  }

  deleteChoice(control, k) {
    control.removeAt(k);
  }



  addCL(){
    let control = <FormArray>this.surveyForm.controls.checkList;
   control.push(
     this.fb.group({
       questionTitle: [''],
       answerChoices: this.fb.array([])
     })
   )
  }
  
  deleteCL(i) {
    this.clForms.removeAt(i);
  }

  drafts() {
    this.router.navigate(['drafts']);
  }
  submission() {
    this.sucess = true; 
  }
}
