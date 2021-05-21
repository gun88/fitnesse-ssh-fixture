import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../../common/base-test-page';
import {PageService} from '../../../../../../service/page.service';

@Component({
  selector: 'app-default-in-properties-file',
  template: `
    <article>
      <h1 id="0">SshFixture option definition in property file</h1>
      SshFixture default options can be also defined in property file. This options are called 'default' because, once defined, are
      available in all SshFixture and, as described in <a
      href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.ScriptTable">ScriptTable</a> page, these options can be overridden and
      restored once called 'reset option'.<br><br>The property file key is: <b>ssh.fixture.options</b>:<br><br>
      <pre>ssh.fixture.options=MY_OPTION_1 MY_OPTION_2=my-value MY_OPTION_3="my value"</pre>
      <br><br>Note: the property file default name is plugins.properties (placed in the <span class="fitnesse">FitNesse</span> working
      directory). As documented here<a title="create page"
                                       href="FitNesse.UserGuide.AdministeringFitNesse.CommandLineArguments?edit&amp;nonExistent=true">[?]</a>,
      property file name and path can be customized.<br><br>Note: priority for defined options is the same used by <span class="fitnesse">FitNesse</span>:
      wiki &gt; VM options &gt; file; so if same options are defined in property file and VM options, the one from VM options will be
      evaluated.
    </article>`,
  styles: ['']
})
export class DefaultInPropertiesFileComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'DefaultInPropertiesFileComponent';
  }


}
