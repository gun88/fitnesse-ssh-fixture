import {Component} from '@angular/core';
import {BaseTestPage} from '../../../common/base-test-page';
import {PageService} from '../../../../service/page.service';

@Component({
  selector: 'app-endpoint-definition',
  template: `
    <article>
      <h1 id="0">SshFixture endpoint definition</h1>
      SshFixture endpoint can be defined in multiple ways (e.g.: password authentication, key pair...).<br><br>
      <div class="contents">
        <b>Contents:</b>
        <ul class="toc1">
          <li>
            <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition.KeyPair" class="static">Key Pair</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition.KnownHosts" class="static">Known Hosts</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition.PasswordAuthentication" class="test">Password Authentication +</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition.PropertiesFile" class="static">Properties File</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition.VmOptions" class="static">Vm Options</a>
          </li>
        </ul>
      </div>
    </article>`,
  styles: ['']
})
export class EndpointDefinitionComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'EndpointDefinitionComponent';
  }


}
