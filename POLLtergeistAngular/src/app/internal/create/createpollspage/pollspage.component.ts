import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-pollspage',
  templateUrl: './pollspage.component.html',
  styleUrls: ['./pollspage.component.scss'],


})
export class PollspageComponent implements OnInit {
  myForm:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.myForm= this.fb.group({
      option: this.fb.array([])
    })

  }
    get optionForms(){
      return this.myForm.get('option') as FormArray
    }
    addOption(){
      const option = this.fb.group({
        answer:[]
      })
      this.optionForms.push(option);
    }
    deleteOption(i) {
      this.optionForms.removeAt(i);
    }
  }
