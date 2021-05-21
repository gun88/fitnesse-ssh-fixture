import {Component} from '@angular/core';
import {BaseTestPage} from '../../../common/base-test-page';
import {PageService} from '../../../../service/page.service';

@Component({
  selector: 'app-customization',
  template: `
    <article>
      <h1 id="0">SshFixture customization</h1>
      SshFixture can be used with <a href="PlugIns.SshFixture.UserGuide.Customization.CustomSession">CustomSession</a> and <a
      href="PlugIns.SshFixture.UserGuide.Customization.CustomOutputProcessor">CustomOutputProcessor</a>.<br><br>
      <div class="contents">
        <b>Contents:</b>
        <ul class="toc1">
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Customization.CustomOptions" class="static">Custom Options</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Customization.CustomOutputProcessor" class="static">Custom Output Processor</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Customization.CustomSession" class="static">Custom Session</a>
          </li>
        </ul>
      </div>
    </article>`,
  styles: ['']
})
export class CustomizationComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'CustomizationComponent';
  }


}
