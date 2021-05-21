import {Component} from '@angular/core';
import {BaseTestPage} from './common/base-test-page';
import {PageService} from '../service/page.service';

@Component({
  selector: 'app-plug-ins',
  template: `
    <article>
      <div class="contents">
        <b>Contents:</b>
        <ul class="toc1">
          <li>
            <a href="PlugIns.SshFixture" class="static">Ssh Fixture</a>
            <ul class="toc2">
              <li>
                <a href="PlugIns.SshFixture.UserGuide" class="suite">User Guide *</a>
                ...
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </article>
  `
})
export class PlugInsComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }


  getPageName() {
    return 'PlugInsComponent';
  }

}
