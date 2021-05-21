import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import marked from 'marked';
import {environment} from '../../../environments/environment';
import {DomSanitizer} from '@angular/platform-browser';


@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }

  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}


@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.scss']
})
export class ReadmeComponent implements OnInit {

  readme: string;

  private static fixAnchors(readme) {

    const regex = /href="#(.+?)"/gi;
    const found = readme.match(regex);
    for (const entry of found) {
      const split: string = entry.match(/href="#(.+?)"/i);
      readme = readme.replace(split[0], 'href="FrontPage#' + split[1] + '"');
    }

    return readme;
  }

  private static addAnchorStyle(readme: string) {
    return '<style>h2::before {content: \'\';display: block;height: 85px;margin-top: -85px;visibility: hidden;}</style>' + readme;
  }

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {

    const s = this.httpClient.get(environment.readmeUrl, {responseType: 'text'})
      .pipe(map(readme => marked(readme, {gfm: true, headerIds: true})))
      .pipe(map(ReadmeComponent.addAnchorStyle))
      .pipe(map(ReadmeComponent.fixAnchors))
      .pipe(tap(x => this.readme = x))
      .subscribe(
        () => s.unsubscribe(),
        () => s.unsubscribe(),
      );
  }


}
