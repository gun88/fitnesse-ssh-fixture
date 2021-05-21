import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-vm-options',
  template: `
    <article>
      <h1 id="0">SshFixture endpoint definition via VM options</h1>
      SshFixture default endpoint can be also defined via VM options. This endpoint is called 'default' because, once defined, is available
      in all SshFixture and, as described
      in <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition.PasswordAuthentication">PasswordAuthentication</a>
      page, this endpoint can be overridden and restored once
      called 'reset endpoint'.<br><br>The VM endpoint key is: <b>ssh.fixture.endpoint</b>
      and can be defined in code:<br><br>
      <pre>System.setProperty("ssh.fixture.endpoint","foo/bar@ssh-fitnesse.dev");</pre>
      <br><br>or as parameter in <span class="fitnesse">FitNesse</span> launch command:<br><br>
      <pre>java -Dssh.fixture.endpoint="foo/bar@ssh-fitnesse.dev" ...</pre>
      <br><br>Note: priority for defined endpoints is the same used by <span class="fitnesse">FitNesse</span>: wiki &gt; VM options &gt;
      file; so if endpoint is defined in property file and VM options, the one from VM options will be evaluated.
    </article>`,
  styles: ['']
})
export class VmOptionsComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'VmOptionsComponent';
  }


}
