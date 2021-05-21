import {Component} from '@angular/core';
import {BaseTestPage} from '../../../common/base-test-page';
import {PageService} from '../../../../service/page.service';

@Component({
  selector: 'app-ssh-test-creation',
  template: `
    <article>
      <h1 id="0">SshFixture ssh test creation</h1>
      This section explain how SshFixture tests can be created.<br><br>
      <div class="contents">
        <b>Contents:</b>
        <ul class="toc1">
          <li>
            <a href="PlugIns.SshFixture.UserGuide.SshTestCreation.CreateYourFirstTest" class="test">Create Your First Test +</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.SshTestCreation.DecisionTableMode" class="test">Decision Table Mode +</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.SshTestCreation.ScriptMode" class="test">Script Mode +</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.SshTestCreation.SftpCommand" class="test">Sftp Command +</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.SshTestCreation.UsingScenarios" class="test">Using Scenarios +</a>
          </li>
        </ul>
      </div>
    </article>`,
  styles: ['']
})
export class SshTestCreationComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'SshTestCreationComponent';
  }


}
