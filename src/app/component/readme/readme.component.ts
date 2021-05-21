import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import marked from 'marked';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.scss']
})
export class ReadmeComponent implements OnInit {

  readme: string;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    const s = this.httpClient.get(environment.readmeUrl, {responseType: 'text'})
      .pipe(tap(readme => this.readme = marked(readme)))
      .subscribe(
        () => s.unsubscribe(),
        () => s.unsubscribe(),
      );
  }

}
