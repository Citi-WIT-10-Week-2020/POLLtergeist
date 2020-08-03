import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { InternalheaderService } from 'src/app/services/internalheader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surveys',
  templateUrl: '../sharedinternal/sharedinternal.component.html',
  styleUrls: ['./surveys.component.scss', '../sharedinternal/sharedinternal.component.scss']
})
export class SurveysComponent implements OnInit {

  i: number = 0; 
  titlePage: string = "Surveys";
  type: string = "survey"; 

  samples = [{sampleName: "survey1", ID: "s1"}, {sampleName: "survey2", ID: "s2"}, 
  {sampleName: "survey3", ID: "s3"}
 // , {sampleName: "survey8"}, {sampleName: "survey9"}, {sampleName: "survey10"},
 // {sampleName: "survey11"}, {sampleName: "survey12"}
  ];

constructor(private router: Router, public internalNav: InternalheaderService, public nav: HeaderService) { }

ngOnInit(): void {

  this.nav.hide(); //hides homepage navbar 
  this.internalNav.show(); //shows navbar for internal elements

}

onNew(){
 this.router.navigate(['newSurvey']);
}

onExisting(){
this.router.navigate(['drafts']);
}

//on click survey square changes color
onSample(event) {
  var target = event.target || event.srcElement || event.currentTarget; 
  target.style.backgroundColor= '#023E7D';
  target.style.color = '#FFFFFF'
  alert("route to survey");
//will pass in link to poll and redirect to the poll
}
}
