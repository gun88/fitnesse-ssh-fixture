import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-custom-options',
  template: `
    <article>
      <h1 id="0">SshFixture custom options</h1>
      Custom options are useful for
      <a href="PlugIns.SshFixture.UserGuide.Customization.CustomOutputProcessor">CustomOutputProcessor</a> and
      <a href="PlugIns.SshFixture.UserGuide.Customization.CustomSession">CustomSession</a>.
      Custom options are managed as list, this means that if multiple options with same key are provided, these will be appended in
      options list. Custom options examples are available in
      <a href="PlugIns.SshFixture.UserGuide.Customization.CustomOutputProcessor">CustomOutputProcessor</a> and
      <a href="PlugIns.SshFixture.UserGuide.Customization.CustomSession">CustomSession</a> pages.<br>
    </article>`,
  styles: ['']
})
export class CustomOptionsComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'CustomOptionsComponent';
  }


}
