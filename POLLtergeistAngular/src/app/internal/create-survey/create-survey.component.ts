import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { newSurvey } from './newSurvey';
import { MaterialModule } from '../material.module';
import { MatCheckboxModule } from '@angular/material/checkbox';


/*
Free response html code 
'<div class = "top"></div> ' +
    ' <div class = "question">' +
        '<div class="example-container">' + 
        '<mat-form-field style= "width: 600px;" appearance="fill">' +
         '<mat-label>Title of Question 1</mat-label>' +
            '<input matInput> ' +
       '</mat-form-field> <br>' +
  '<mat-form-field  style = "width: 500px;" appearance="outline">' +
    '<div class = "txtArea">' +
      '<mat-label>Answer Here</mat-label>' +
          '<textarea matInput></textarea>' +
   '</div></mat-form-field> </div>'
*/

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})


export class CreateSurveyComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    var d1 = this.elementRef.nativeElement.querySelector('.element');
    d1.insertAdjacentHTML('beforeend',
      '<div class="txtArea">' +
      'two</div>');
  }
/*
  addFreeResponse() {
    var d1 = this.elementRef.nativeElement.querySelector('.question');
    d1.insertAdjacentHTML('beforeend',
      ` <!-- first question -->
<div class = "questionBackground"> 
<div class = "top"></div>
<div class = "question">
    <div class="example-container">
      <mat-form-field style= "width: 600px;" appearance="fill">
        <mat-label>Title of Question 1</mat-label>
          <input matInput>
      </mat-form-field>
       
<br>

<!-- answer to question 1  -->
<mat-form-field  style = "width: 500px;" appearance="outline">
  <div class = "txtArea">
    <mat-label></mat-label>
        <textarea matInput></textarea>
  </div>
</mat-form-field>
</div>`
    );
   

  }
 */
  
 addFreeResponse() {
  var d1 = this.elementRef.nativeElement.querySelector('.question');
  d1.insertAdjacentHTML('beforeend', `<mat-form-field style= "width: 600px;" appearance="fill">
  <mat-label>Title of Question 1</mat-label>
    <input matInput>
</mat-form-field>`);

 }

  addOption() {

    var d1 = this.elementRef.nativeElement.querySelector('.MC');
    d1.insertAdjacentHTML('beforeend',
      '<mat-checkbox style= "padding-left: 10px;">Check me!</mat-checkbox>');
  }

  ngOnInit(): void {

  }

  onFreeResponse() {
    alert("hi");
  }

}
