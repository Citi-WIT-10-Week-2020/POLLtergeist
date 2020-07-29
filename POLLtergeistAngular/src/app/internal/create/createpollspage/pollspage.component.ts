import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


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

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      title: [''],
      questions: this.fb.array([])
    })

    this.setQuestions();
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
  