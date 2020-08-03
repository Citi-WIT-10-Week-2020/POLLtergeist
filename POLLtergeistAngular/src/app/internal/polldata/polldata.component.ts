import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polldata',
  templateUrl: './polldata.component.html',
  styleUrls: ['./polldata.component.scss']
})
export class PolldataComponent implements OnInit {

  title: string = "Work Environment";
  constructor() { }

  ngOnInit(): void {
  }

}
