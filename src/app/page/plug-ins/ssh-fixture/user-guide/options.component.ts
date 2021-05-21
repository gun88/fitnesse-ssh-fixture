import {Component} from '@angular/core';
import {BaseTestPage} from '../../../common/base-test-page';
import {PageService} from '../../../../service/page.service';

@Component({
  selector: 'app-option',
  template: `
    <article>
      <h1 id="0">SshFixture options</h1>
      SshFixture options can be set mainly to customize interaction with ssh server or post process output. Click <a
      href="PlugIns.SshFixture.UserGuide.Options.DefineOptions">here</a> to find out how to define options.<br><br>
      <div class="contents">
        <b>Contents:</b>
        <ul class="toc1">
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions" class="suite">Define Options *</a>
            <ul class="toc2">
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
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions" class="suite">Endpoint Options *</a>
            <ul class="toc2">
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.ConnectionTimeout" class="test">Connection Timeout +</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.KnownHosts" class="test">Known Hosts +</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.Passphrase" class="test">Passphrase +</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.PrivateKey" class="test">Private Key +</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.PublicKey" class="test">Public Key +</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.FactoryOptions" class="suite">Factory Options *</a>
            <ul class="toc2">
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Options.FactoryOptions.OutputProcessorClass" class="static">Output Processor Class</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Options.FactoryOptions.SessionClass" class="static">Session Class</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options.OutputOptions" class="suite">Output Options *</a>
            <ul class="toc2">
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Options.OutputOptions.IgnoreCarriageReturn" class="test">Ignore Carriage Return +</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Options.OutputOptions.PreformattedOutput" class="test">Preformatted Output +</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Options.OutputOptions.Replace" class="test">Replace +</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Options.OutputOptions.TerminalWidth" class="test">Terminal Width +</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </article>`,
  styles: ['']
})
export class OptionsComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'OptionsComponent';
  }


}
