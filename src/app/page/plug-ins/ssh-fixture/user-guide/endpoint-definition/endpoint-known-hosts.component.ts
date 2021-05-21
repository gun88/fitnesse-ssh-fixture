import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-endpoint-known-hosts',
  template: `
    <article>
      <h1 id="0">SshFixture known hosts</h1>
      Known hosts can be set via option definition. Involved option is:<br>
      <ol>
        <li><a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.KnownHosts">KnownHosts</a></li>
      </ol>
      <br>Note: in default implementation (jsch), if not set, known-hosts validation is skipped.<br>
    </article>`,
  styles: ['']
})
export class EndpointKnownHostsComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'EndpointKnownHostsComponent';
  }


}
