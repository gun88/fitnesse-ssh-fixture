import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-auto-extraction-mode',
  template: `
    <article>
      <h1 id="0">Auto Extraction Mode Installation</h1>
      If you do not want to use SshFixture as a plugin, the auto extraction&nbsp;utility&nbsp;can be executed running the following command
      (replaceing /path/tp/fitnesse-ssh-fixture.jar with the actual fitnesse-ssh-fixture.jar and /FitNesseRoot/path with actual FitNesseRoot
      path):<br><br>
      <pre>java -classpath /path/tp/fitnesse-ssh-fixture.jar com.github.gun88.fitnesse.plugin.ssh.SshClientPlugin /FitNesseRoot/path</pre>
      <br>
      <h2 id="1">Documentation</h2>
      Documentation files are extracted in the <a href="PlugIns">FitNesse PlugIns</a> directory.<br><br>
      <h2 id="2">Dependencies</h2>
      To run tests with default implementations, SshFixture needs the
      <a target="_blank" href="http://www.jcraft.com/jsch/">jsch</a> library that, in auto
      extraction mode, is also auto-extracted. To run test with customized implementations, go to <a
      href="PlugIns.SshFixture.UserGuide.Customization">this</a> page.<br><br>
      <h2 id="3">Classpath</h2>
      During extraction, paths to required jars are replaced in the SshFixture.wiki so the user guide file can be executed correctly. To run
      :<br>
      <ol>
        <li>jsch.jar.path</li>
        <li>sshFixture.jar.path</li>
      </ol>
      <br>
      <h2 id="4">Create Test</h2>
      If auto extraction mode was used as installation method, to create your test using SshFixture, you need to define paths to required
      jars in your test/suite page :<br>
      <pre>!path /actual/path/to/jsch.jar
!path /actual/path/to/sshFixture.jar</pre>
      <br>Note: differently from plugin mode, paths must be defined due to the fact that these are not
      stored in <span class="fitnesse">FitNesse</span>
      context.<br>More details on test creation available <a href="PlugIns.SshFixture.UserGuide.SshTestCreation">here</a>.<br>

    </article>`,
  styles: ['']
})
export class AutoExtractionModeComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'AutoExtractionModeComponent';
  }


}
