import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../../common/base-test-page';
import {PageService} from '../../../../../../service/page.service';

@Component({
  selector: 'app-default-in-vm-options',
  template: `
    <article>
      <h1 id="0">SshFixture option definition via VM options</h1>
      SshFixture default options can be also defined via VM options. This options are called 'default' because, once defined, are available
      in all SshFixture and, as described in <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.ScriptTable">ScriptTable</a> page,
      these options can be overridden and restored once called 'reset option'.<br><br>The VM option key is: <b>ssh.fixture.options</b> and
      can be defined in code:<br><br>
      <pre>System.setProperty("ssh.fixture.options","MY_OPTION_1 MY_OPTION_2=my-value MY_OPTION_3=\\"my value\\"");</pre>
      <br><br>or as parameter in <span class="fitnesse">FitNesse</span> launch command:<br><br>
      <pre>java -Dssh.fixture.options="MY_OPTION_1 MY_OPTION_2=my-value MY_OPTION_3=\\"my value\\"" ...</pre>
      <br><br>Note: priority for defined options is the same used by <span class="fitnesse">FitNesse</span>: wiki &gt; VM options &gt; file;
      so if same options are defined in property file and VM options, the one from VM options will be evaluated.<br>

    </article>`,
  styles: ['']
})
export class DefaultInVmOptionsComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'DefaultInVmOptionsComponent';
  }


}
