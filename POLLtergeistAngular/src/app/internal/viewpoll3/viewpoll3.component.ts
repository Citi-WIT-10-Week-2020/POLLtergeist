import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewpoll3',
  templateUrl: '../viewpoll/viewpoll.component.html',
  styleUrls: ['../viewpoll/viewpoll.component.scss']
})
export class Viewpoll3Component implements OnInit {

  title: string = "Fake Title";
  question1: any = {questionTitle: "Fake?", answerChoices: ["a", "b"]};
  answerChoices: any = ["a", "b"];
  index: number = 2; 

  constructor(public data: DataService, public router: Router) { }

  ngOnInit(): void {
    this.question1 = this.data.getQuestion3();
    this.title = this.question1.title;
    this.answerChoices = this.question1.answerChoices;
    this.index = this.question1.index; 
  
  
  }

viewData() {
  this.router.navigate(['viewpolldata']);
}
toPolls() {
    this.router.navigate(['polls']);
}
}
