import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surveys',
  templateUrl: '../sharedinternal/sharedinternal.component.html',
  styleUrls: ['./surveys.component.scss', '../sharedinternal/sharedinternal.component.scss']
})
export class SurveysComponent implements OnInit {

  titlePage: string = "Surveys";
  type: string = "survey"; 

  samples= [{sampleName: "survey1"}, {sampleName: "survey2"}, {sampleName: "survey3"}, {sampleName: "survey4"}, {sampleName: "survey5"},
  {sampleName: "survey6"}, {sampleName: "survey7"}
 // , {sampleName: "survey8"}, {sampleName: "survey9"}, {sampleName: "survey10"},
 // {sampleName: "survey11"}, {sampleName: "survey12"}
  ];

constructor() { }

ngOnInit(): void {


}

onNew(){
alert("route to new survey template");
//this.router.navigate(['newpoll']);
}

onExisting(){
alert("route to drafts");
//this.router.navigate(['drafts']);
}

onSample(event) {
  var target = event.target || event.srcElement || event.currentTarget; 
  target.style.backgroundColor= '#023E7D';
  target.style.color = '#FFFFFF'
  alert("route to survey");
//will pass in link to poll and redirect to the poll
}
}
