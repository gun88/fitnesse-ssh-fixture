import {Component, OnInit} from '@angular/core';
import {PageService} from '../../service/page.service';
import {environment} from '../../../environments/environment';
import {FitNesseUrlSegment} from '../../model/fit-nesse-url-segment';
import {tap} from 'rxjs/operators';

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


  constructor(private pageService: PageService) {
  }

  ngOnInit(): void {
    this.pageService.getPageType().subscribe(pageType => {
      this.pageType = pageType;
    });
    this.pageService.getUrlSegments()
      .pipe(tap(urlSegments => this.urlSegments = urlSegments))
      .pipe(tap(urlSegments => this.pageUrl = urlSegments[urlSegments.length - 1].url))
      .subscribe();

  }


}
