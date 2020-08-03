import { Component, OnInit } from '@angular/core';
import { HeaderService} from 'src/app/services/header.service' 
import { InternalheaderService } from 'src/app/services/internalheader.service';
import { Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.scss',]
})
export class DraftsComponent implements OnInit {

  constructor(private router: Router, public internalNav: InternalheaderService, public nav: HeaderService, public dialog: MatDialog) { }

  ngOnInit(): void {
    
    this.nav.hide(); //hides homepage navbar
    this.internalNav.show(); //shows internal elements navbar 
  }

}
