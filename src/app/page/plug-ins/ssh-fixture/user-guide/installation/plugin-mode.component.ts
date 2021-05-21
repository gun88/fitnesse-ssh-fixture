import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-plugin-mode',
  template: `
    <article>
      <h1 id="0">Plugin Mode Installation</h1>
      As shown in <a href="PlugIns.SshFixture.UserGuide">QuickStart</a> session, the plugin mode installation can be executed just placing
      the fitnesse-ssh-fixture.jar in the <span class="fitnesse">FitNesse</span> plugin directory or by making the jar file available in the
      <span class="fitnesse">FitNesse</span> web server classpath. When the archive is available in classpath, documentation files and
      dependency libraries are automatically extracted and tuned.<br><br>
      <h2 id="1">Documentation</h2>
      Documentation files are automatically extracted in the <a href="PlugIns">FitNesse PlugIns</a> directory.<br><br>
      <h2 id="2">Dependencies</h2>
      To run tests with default implementations, SshFixture needs the <a target="_blank" href="http://www.jcraft.com/jsch/">jsch</a>
      library that, in plugin mode, is also auto-extracted. To run test with customized implementations,
      go to <a href="PlugIns.SshFixture.UserGuide.Customization">this</a>
      page.<br><br>
      <h2 id="3">Classpath</h2>
      During plugin mode initialization, paths to required jars are stored in <span class="fitnesse">FitNesse</span> context with the
      following keys:<br>
      <ol>
        <li>jsch.jar.path</li>
        <li>sshFixture.jar.path</li>
      </ol>
      <br>
      <h2 id="4">Create Test</h2>
      To create a test using SshFixture, you just need to paste following lines in test/suite page:<br>
      <pre>!path {{'$'}}{{'{'}}jsch.jar.path}
!path {{'$'}}{{'{'}}sshFixture.jar.path}</pre>
      <br>More details on test creation available <a href="PlugIns.SshFixture.UserGuide.SshTestCreation">here</a>.
    </article>`,
  styles: ['']
})
export class PluginModeComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'PluginModeComponent';
  }


}
