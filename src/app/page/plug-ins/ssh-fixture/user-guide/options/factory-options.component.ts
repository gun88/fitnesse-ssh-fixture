import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-factory-options',
  template: `
    <article>
      <div class="contents">
        <b>Contents:</b>
        <ul class="toc1">
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.FactoryOptions.OutputProcessorClass" class="static">Output Processor Class</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.FactoryOptions.SessionClass" class="static">Session Class</a>
          </li>
        </ul>
      </div>
    </article>`,
  styles: ['']
})
export class FactoryOptionsComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'FactoryOptionsComponent';
  }


}
