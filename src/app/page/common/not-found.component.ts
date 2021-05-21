import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: `
    <article>
      The requested resource: <i>{{route.url | async}}</i> was not found.
    </article>`,
  styles: ['']
})
export class NotFoundComponent {


  constructor(public route: ActivatedRoute) {
  }


}
