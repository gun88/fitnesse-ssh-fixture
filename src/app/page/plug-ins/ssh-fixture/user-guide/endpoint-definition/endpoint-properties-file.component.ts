import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-endpoint-properties-file',
  template: `
    <article>
      <h1 id="0">SshFixture endpoint definition in property file</h1>
      SshFixture default endpoint can be also defined in property file. This endpoint is called 'default' because, once defined, is
      available in all SshFixture and, as described
      in <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition.PasswordAuthentication">PasswordAuthentication</a>
      page, this endpoint can be overridden and restored once called 'reset endpoint'.<br><br>The property file
      key is: <b>ssh.fixture.endpoint</b>:<br><br>
      <pre>ssh.fixture.endpoint=foo/bar@ssh-fitnesse.dev</pre>
      <br><br>Note: the property file default name is plugins.properties (placed in the <span class="fitnesse">FitNesse</span> working
      directory). As documented <a target="_blank"
                                   href="http://fitnesse.org/FitNesse.UserGuide.AdministeringFitNesse.CommandLineArguments">here</a>,
      property file name and path can be customized.<br><br>Note: priority for defined
      endpoint is the same used by <span class="fitnesse">FitNesse</span>:
      wiki &gt; VM options &gt; file; so if endpoint is defined in property file and VM options, the one from VM options will be evaluated.
    </article>`,
  styles: ['']
})
export class EndpointPropertiesFileComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'EndpointPropertiesFileComponent';
  }


}
