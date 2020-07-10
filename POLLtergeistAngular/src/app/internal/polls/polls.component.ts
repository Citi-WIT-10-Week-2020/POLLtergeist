import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {
  router: any;

  //sample data to test polls main page 
  polls= [{pollName: "poll1"}, {pollName: "poll2"}, {pollName: "poll3"}, {pollName: "poll4"}, {pollName: "poll5"},
          {pollName: "poll6"}, {pollName: "poll7"}, {pollName: "poll8"}, {pollName: "poll9"}, {pollName: "poll10"},
          {pollName: "poll11"}, {pollName: "poll12"}];

  constructor() { }

  ngOnInit(): void {

    
  }

  onNewPoll(){
    alert("route to new poll template");
    //this.router.navigate(['newpoll']);
  }

  onExistingPoll(){
    alert("route to drafts");
    //this.router.navigate(['drafts']);
  }

  onSamplePoll() {
    alert("route to poll");
    //will pass in link to poll and redirect to the poll
  }

}
