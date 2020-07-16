import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternalheaderService } from 'src/app/services/internalheader.service';

@Component({
  selector: 'app-internalheader',
  templateUrl: './internalheader.component.html',
  styleUrls: ['./internalheader.component.scss']
})
export class InternalheaderComponent implements OnInit {

  constructor( public internalNav: InternalheaderService, private router: Router) { }

  ngOnInit(): void {

  }

  backHome() {
    this.router.navigate(['']);
  }

}
