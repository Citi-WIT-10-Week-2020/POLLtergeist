import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewsurvey',
  templateUrl: './viewsurvey.component.html',
  styleUrls: ['./viewsurvey.component.scss']
})
export class ViewsurveyComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  viewData() {
    this.router.navigate(['viewpolldata']);
  }
    toPolls() {
      this.router.navigate(['surveys']);
    }
}
