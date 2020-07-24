import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nested-option',
  templateUrl: './nested-option.component.html',
  styleUrls: ['./nested-option.component.scss']
})
export class NestedOptionComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    const option = this.fb.group({
      answer:[]
    })
    this.myForm = this.fb.group({
      question:''
    })
  }
}