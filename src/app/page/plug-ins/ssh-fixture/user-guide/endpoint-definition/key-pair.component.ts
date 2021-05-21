import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-key-pair',
  template: `
    <article>
      <h1 id="0">SshFixture key pair authentication</h1>
      Key pair authentication can be executed via option definition. Involved options are the following:<br>
      <ol>
        <li><a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.PrivateKey">PrivateKey</a></li>
        <li><a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.Passphrase">Passphrase</a></li>
        <li><a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.PublicKey">PublicKey</a></li>
      </ol>
      <br>Note: keys must have RSA format with default session (jsch).<br>
    </article>`,
  styles: ['']
})
export class KeyPairComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'KeyPairComponent';
  }


}
