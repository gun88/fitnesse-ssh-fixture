import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-endpoint-options',
  template: `
    <article>
      <h1 id="0">SshFixture endpoint options</h1>
      This suite contains endpoint related options. To know more about Endpoint definition click <a
      href="PlugIns.SshFixture.UserGuide.EndpointDefinition">here</a>.<br><br>
      <div class="contents">
        <b>Contents:</b>
        <ul class="toc1">
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.ConnectionTimeout" class="test">Connection Timeout +</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.KnownHosts" class="test">Known Hosts +</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.Passphrase" class="test">Passphrase +</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.PrivateKey" class="test">Private Key +</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.PublicKey" class="test">Public Key +</a>
          </li>
        </ul>
      </div>
    </article>`,
  styles: ['']
})
export class EndpointOptionsComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'EndpointOptionsComponent';
  }


}
