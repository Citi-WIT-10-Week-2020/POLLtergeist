import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {
  router: any;

  pollslist: any[] = [{"pollName": "poll1"}, {"pollName": "poll2"}];

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

}
