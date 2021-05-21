import {Component, OnInit} from '@angular/core';
import {PageService} from '../../service/page.service';
import {environment} from '../../../environments/environment';
import {FitNesseUrlSegment} from '../../model/fit-nesse-url-segment';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  env = environment;
  urlSegments: FitNesseUrlSegment[];
  pageType = 'NOT_FOUND';
  pageUrl: string;


  private static removeHash(x: FitNesseUrlSegment[]): FitNesseUrlSegment[] {
    return x.map(y => {
      if (y.pageName.includes('#')) {
        y.pageName = y.pageName.substr(0, y.pageName.indexOf('#'));
      }
      if (y.url.includes('#')) {
        y.url = y.url.substr(0, y.url.indexOf('#'));
      }
      return y;
    });
  }

  constructor(private pageService: PageService) {
  }

  ngOnInit(): void {
    this.pageService.getPageType().subscribe(pageType => {
      this.pageType = pageType;
    });
    this.pageService.getUrlSegments()
      .pipe(map(NavbarComponent.removeHash))
      .pipe(tap(urlSegments => this.urlSegments = urlSegments))
      .pipe(tap(urlSegments => this.pageUrl = urlSegments[urlSegments.length - 1].url))
      .subscribe();

  }


}
