import {Component, OnInit} from '@angular/core';
import Mousetrap from 'src/assets/fitnesse/javascript/mousetrap.min.js';
import {environment} from '../../../environments/environment';
import {PageService} from '../../service/page.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  pageType: string = 'NOT_FOUND';


  env = environment;

  constructor(private pageService: PageService) {
  }

  bindMousetrap(pageUrl: string): void {
    Mousetrap.bind('v', function() {
      window.location.href = pageUrl;
    });

    Mousetrap.bind('t', function() {
      window.location.href = `${pageUrl}?test`;
    });
    Mousetrap.bind('e', function() {
      window.location.href = 'EditPage';
    });
    Mousetrap.bind('a', function() {
      window.location.href = `AddPage`;
    });
    Mousetrap.bind('p', function() {
      window.location.href = `properties`;
    });
    Mousetrap.bind('w', function() {
      window.location.href = `whereUsed`;
    });
    Mousetrap.bind('s', function() {
      window.location.href = `search`;
    });
    Mousetrap.bind('/', function() {
      alert('disabled');
      return false;  // stops the / character appearing in search box
    });
    Mousetrap.bind('g u', function() {
      alert('disabled');
    });
    Mousetrap.bind('g q', function() {
      alert('disabled');
    });
    Mousetrap.bind('g f', function() {
      alert('disabled');
    });
    Mousetrap.bind('g c', function() {
      alert('disabled');
    });

    Mousetrap.bind('?', function() {
      window.location.hash = '-shortcut-keys';
    });
  }

  ngOnInit(): void {
    this.pageService.getPageType().subscribe(pageType => this.pageType = pageType);
    this.pageService.getPageUrl().pipe(tap(this.bindMousetrap)).subscribe();
  }

}
