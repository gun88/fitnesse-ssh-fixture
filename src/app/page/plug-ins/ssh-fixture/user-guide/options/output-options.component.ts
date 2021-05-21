import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-output-options',
  template: `
    <article>
      <div class="contents">
        <b>Contents:</b>
        <ul class="toc1">
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.OutputOptions.IgnoreCarriageReturn" class="test">Ignore Carriage Return +</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.OutputOptions.PreformattedOutput" class="test">Preformatted Output +</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.OutputOptions.Replace" class="test">Replace +</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.OutputOptions.TerminalWidth" class="test">Terminal Width +</a>
          </li>
        </ul>
      </div>
    </article>`,
  styles: ['']
})
export class OutputOptionsComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'OutputOptionsComponent';
  }


}
