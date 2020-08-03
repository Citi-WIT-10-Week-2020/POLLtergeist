import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InternalheaderService } from 'src/app/services/internalheader.service';
import { HeaderService } from 'src/app/services/header.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-pollspage',
  templateUrl: './pollspage.component.html',
  styleUrls: ['./pollspage.component.scss'],


})
export class PollspageComponent {
  data = {
    questions: [
      {
        question: "",
        options: [
          {
            option: "",
          }
        ]
      }
    ]
  }

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, public internalNav: InternalheaderService, public nav: HeaderService, public dialog: MatDialog) { 
    this.myForm = this.fb.group({
      title: [''],
      questions: this.fb.array([])
    })

    this.setQuestions();
  }
  
  ngOnInit(): void{
  this.nav.hide(); //hides homepage navbar
  this.internalNav.show(); //shows internal elements navbar 
  }

  onSubmit() {
    alert(this.myForm.value);
  }

  addNewQuestion() {
    let control = <FormArray>this.myForm.controls.questions;
    control.push(
      this.fb.group({
        question: [''],
        options: this.fb.array([])
      })
    )
  }


  deleteQuestion(index) {
    let control = <FormArray>this.myForm.controls.questions;
    control.removeAt(index)
  }

  addNewOption(control) {
    control.push(
      this.fb.group({
        option: ['']
      }))
  }

  deleteOption(control, index) {
    control.removeAt(index)
  }

  setQuestions() {
    let control = <FormArray>this.myForm.controls.questions;
    this.data.questions.forEach(x => {
      control.push(this.fb.group({ 
        question: x.question, 
        options: this.setOptions(x) }))
    })
  }

  setOptions(x) {
    let arr = new FormArray([])
    x.options.forEach(y => {
      arr.push(this.fb.group({ 
        option: y.option
      }))
    })
    return arr;
  }
}