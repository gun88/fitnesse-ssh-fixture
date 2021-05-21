import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../../common/base-test-page';
import {PageService} from '../../../../../../service/page.service';

@Component({
  selector: 'app-output-processor-class',
  template: `
    <article>
      <h1 id="0">SshFixture output processor</h1>
      This option (labeled with: OUTPUT_PROCESSOR_CLASS) is used to define the customized output processor class name. Output processor
      class is a single value option so, each new definition will overwrite the previous one. To learn how to implement a customized output
      processor, go to <a href="PlugIns.SshFixture.UserGuide.Customization.CustomOutputProcessor">CustomOutputProcessor</a> page.<br><br>
      Note: like every other option, can be defined in multiple ways, as shown
      in <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions">DefineOptions</a> page.
    </article>`,
  styles: ['']
})
export class OutputProcessorClassComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'OutputProcessorClassComponent';
  }


}
