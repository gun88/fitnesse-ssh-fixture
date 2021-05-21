import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-manual-mode',
  template: `
    <article>
      <h1 id="0">Manual Mode Installation</h1>
      If you do not want to use SshFixture as a plugin or extracting files, all you need to do to execute tests is set paths to
      fitnesse-ssh-fixture.jar and its dependencies in test pages.<br>
      <pre>!path /path/tp/fitnesse-ssh-fixture.jar
!path /path/to/jsch.jar</pre>
      <br>
      <h2 id="1">Documentation</h2>
      Not available out of the box in manual mode<br><br>
      <h2 id="2">Classpath</h2>
      Must be defined manually.<br>
      <h2 id="3">Create Test</h2>
      With this installation method, to create your test using SshFixture, you need to define paths to required jars
      in your test/suite page:<br>
      <pre>!path /actual/path/to/jsch.jar
!path /actual/path/to/sshFixture.jar</pre>
      <br>Note: differently from plugin mode, paths must be defined due to the fact that those are not
      stored in <span class="fitnesse">FitNesse</span> context.<br>More details on test creation
      available <a href="PlugIns.SshFixture.UserGuide.SshTestCreation">here</a>.
    </article>`,
  styles: ['']
})
export class ManualModeComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'ManualModeComponent';
  }


}
