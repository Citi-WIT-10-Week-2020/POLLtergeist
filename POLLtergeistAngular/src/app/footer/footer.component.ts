import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
<<<<<<< Updated upstream
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
=======
  template: `
  <footer class="footer">
      <div class="has-text-centered has-text-white" style="background-color:#979DAC; height:35px;font-family:josefin sans, sans-serif;">
        <p>Copyright POLLtergeist 2020</p>
      </div>
    </footer>
  
  `,
  //templateUrl: './footer.component.html',
  //styleUrls: ['./footer.component.scss']
>>>>>>> Stashed changes
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
