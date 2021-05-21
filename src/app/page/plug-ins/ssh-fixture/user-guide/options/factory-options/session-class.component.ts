import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../../common/base-test-page';
import {PageService} from '../../../../../../service/page.service';

@Component({
  selector: 'app-session-class',
  template: `
    <article>
      <h1 id="0">SshFixture session class</h1>
      This option (labeled with: SESSION_CLASS) is used to define the customized ssh session class name. Session class is a single value
      option so, each new definition will overwrite the previous one. To learn how to implement a customized session, go to <a
      href="PlugIns.SshFixture.UserGuide.Customization.CustomSession">CustomSession</a> page.<br><br>Note: like every other option, can be
      defined in multiple ways, as shown in <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions">DefineOptions</a> page.
    </article>`,
  styles: ['']
})
export class SessionClassComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'SessionClassComponent';
  }


}
