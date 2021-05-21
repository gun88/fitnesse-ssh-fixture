import {Injectable} from '@angular/core';
import {FitNesseUrlSegment} from '../model/fit-nesse-url-segment';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  urlSegments: Observable<FitNesseUrlSegment[]>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.urlSegments = this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      .pipe(map(event => {
        let queryParamsStart = event.url.lastIndexOf('?');
        if (queryParamsStart === -1) {
          queryParamsStart = event.url.length;
        } else {
          queryParamsStart--;
        }
        let url = event.url.substr(1, queryParamsStart);
        if (url.includes('/')) {
          return [{pageName: event.url, url: event.url}];
        }

        if (url.length === 0) {
          url = 'FrontPage';
        }

        // if contain slash....null ...null ngif not
        const urlSegments: string[] = url.split('.');

        return urlSegments.map((segment, index) => ({
          pageName: segment,
          url: urlSegments.slice(0, index + 1).join('.')
        }));

      }));
  }


  public getPageType(): Observable<string> {
    return this.urlSegments
      .pipe(map(urlSegments => urlSegments[urlSegments.length - 1].pageName))
      .pipe(map(pageName => {
        pageName = pageName.trim();
        if (pageName.toLowerCase().includes('suite')) {
          return 'SUITE';
        }
        if (pageName.toLowerCase().includes('test') || pageName.toLowerCase() == 'typographyshowcase') {
          return 'TEST';
        }
        if (pageName.length === 0 || pageName === 'FrontPage') {
          return 'FRONT_PAGE';
        }
        if (this.isStaticPage(pageName)) {
          return 'STATIC';
        }
        if (pageName.toLowerCase().includes('edit') ||
          pageName.toLowerCase().includes('add') ||
          pageName.toLowerCase().includes('refactor') ||
          pageName.toLowerCase().includes('delete')) {
          return 'DISABLED';
        }
        return 'STATIC';
      }))
      .pipe(switchMap(pageName => {
        if (pageName !== null) {
          return of(pageName);
        }
        return this.manageQueryParams();
      }));


  }

  getPageUrl(): Observable<string> {
    return this.urlSegments
      .pipe(map(urlSegments => urlSegments[urlSegments.length - 1].url));
  }

  getPageName(): Observable<string> {
    return this.urlSegments
      .pipe(map(urlSegments => urlSegments[urlSegments.length - 1].pageName));
  }

  getUrlSegments(): Observable<FitNesseUrlSegment[]> {
    return this.urlSegments;
  }

  getQueryParams(): Observable<Params> {
    return this.route.queryParams;
  }

  execute(pageName: string) {
    this.router.navigate(['ExecutionPage'], {
      queryParams: {pageName},
      skipLocationChange: true
    });
  }

  redirect(page: string) {
    this.getPageUrl();
    const queryParams = {};
    this.router.navigate([page], {queryParams, skipLocationChange: true});
  }

  private isStaticPage(pageName) {
    if (pageName.toLowerCase().includes('setup') ||
      pageName.toLowerCase().includes('teardown') ||
      pageName.toLowerCase().includes('showcase')) {
      return true;
    }
    return false;
  }

  private manageQueryParams(): Observable<string> {
    return this.getQueryParams()
      .pipe(map(params => Object.keys(params).map(k => k.toLowerCase())))
      .pipe(map(params => {
        if (params.includes('edit')) {
          return 'EDITING';
        }
        if (params.includes('new')) {
          return 'CREATING';
        }

        return 'NOT_FOUND';
      }));

  }
}
