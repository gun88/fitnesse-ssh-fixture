import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-front-page',
  template: `
    <app-jumbotron></app-jumbotron>
    <div class="container-fluid container-lg">
      <div class="row">
        <div class="col-md-9" style="overflow: hidden">
          <app-readme></app-readme>
          <app-projects></app-projects>
        </div>
        <div class="col-md-3" style="overflow: hidden">
          <app-recap-table></app-recap-table>
        </div>
      </div>

    </div>
  `
})
export class FrontPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
