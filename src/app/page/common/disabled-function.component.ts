import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-disabled-function',
  template: `
    <article>
      This action has been disabled.<br>
      You are seeing this page because the administrator of the FitNesse Wiki has decided that this action should be
      disabled.<br>
      <br>
      Thanks
    </article>`
})
export class DisabledFunctionComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
