import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharedinternal',
  template:`
  <h1>Shared Code Between Polls and Surveys</h1>`
  ,
  styleUrls: ['./sharedinternal.component.scss']
})
export class SharedinternalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
