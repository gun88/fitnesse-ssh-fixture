import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-define-options',
  template: `
    <article>
      <h1 id="0">SshFixture option definition</h1>
      SshFixture options can be set in table header for decision table and script header or via dedicated row in script and scenario tables.
      Default option values can be also provided via VM options and FitNesse properties file.<br><br>
      <div class="contents">
        <b>Contents:</b>
        <ul class="toc1">
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.DecisionTable" class="test">Decision Table +</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.DefaultInPropertiesFile" class="static">Default In Properties
              File</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.DefaultInVmOptions" class="static">Default In Vm Options</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.ScenarioTable" class="test">Scenario Table +</a>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.ScriptTable" class="test">Script Table +</a>
          </li>
        </ul>
      </div>
    </article>`,
  styles: ['']
})
export class DefineOptionsComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'DefineOptionsComponent';
  }


}
