import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polls',
  templateUrl: '../sharedinternal/sharedinternal.component.html',
  styleUrls: ['./polls.component.scss','../sharedinternal/sharedinternal.component.scss']
})
export class PollsComponent implements OnInit {
  router: any;
  
  titlePage: string = "Polls";
  type: string = "Poll"; 

  //sample data 
  samples= [{sampleName: "poll1"}, {sampleName: "poll2"}, {sampleName: "poll3"}, {sampleName: "poll4"}, {sampleName: "poll5"},
  {sampleName: "poll6"}, {sampleName: "poll7"}, {sampleName: "poll8"}, {sampleName: "poll9"}, {sampleName: "poll10"},
  {sampleName: "poll11"}, {sampleName: "poll12"}];

  constructor() { }

  ngOnInit(): void {
    
  }
 
  onNew(){
    alert("route to new poll template");
    //this.router.navigate(['newpoll']);
  }

  onExisting(){
    alert("route to drafts");
    //this.router.navigate(['drafts']);
  }

  onSample() {
    alert("route to poll");
    //will pass in link to poll and redirect to the poll
  }

}
