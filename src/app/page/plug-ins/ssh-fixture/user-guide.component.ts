import {Component} from '@angular/core';
import {BaseTestPage} from '../../common/base-test-page';
import {PageService} from '../../../service/page.service';

@Component({
  selector: 'app-user-guide',
  template: `
    <article>
      <h1 id="0">SshFixture User Guide</h1>
      <b>SshFixture</b> (fitnesse-ssh-fixture) is a <span class="fitnesse">FitNesse</span> slim fixture for ssh protocol
      communications<br><br>
      <h2 id="1">Quick Start</h2>
      To start using SshFixture, just put the release jar into the <span class="fitnesse">FitNesse</span> plugins directory and restart
      <span class="fitnesse">FitNesse</span> Web Server, then you will able to run <a href="PlugIns.SshFixture.UserGuide">UserGuide</a>
      suite's tests.<br>Go to the <a href="PlugIns.SshFixture.UserGuide.Installation">Installation</a> page to see more details and
      different installation modes.<br>Go to <a
      href="PlugIns.SshFixture.UserGuide.SshTestCreation.CreateYourFirstTest">CreateYourFirstTest</a> to start writing test using
      SshFixture.<br><br>Note: in user guide test, a connection to a dummy ssh server is used: <i>ssh-fitnesse.dev</i><br><br>
      <div class="contents">
        <b>Contents:</b>
        <ul class="toc1">
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Customization" class="static">Customization</a>
            <ul class="toc2">
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Customization.CustomOptions" class="static">Custom Options</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Customization.CustomOutputProcessor" class="static">Custom Output Processor</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Customization.CustomSession" class="static">Custom Session</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition" class="suite">Endpoint Definition *</a>
            <ul class="toc2">
              <li>
                <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition.KeyPair" class="static">Key Pair</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition.KnownHosts" class="static">Known Hosts</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition.PasswordAuthentication" class="test">Password Authentication +</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition.PropertiesFile" class="static">Properties File</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition.VmOptions" class="static">Vm Options</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Installation" class="static">Installation</a>
            <ul class="toc2">
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Installation.AutoExtractionMode" class="static">Auto Extraction Mode</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Installation.ManualMode" class="static">Manual Mode</a>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Installation.PluginMode" class="static">Plugin Mode</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.Options" class="suite">Options *</a>
            <ul class="toc2">
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions" class="suite">Define Options *</a>
                <ul class="toc3">
                  <li>
                    <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.DecisionTable" class="test">Decision Table +</a>
                  </li>
                  <li>
                    <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.DefaultInPropertiesFile" class="static">Default In
                      Properties File</a>
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
                <ul class="toc3">
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
                <ul class="toc3">
                  <li>
                    <a href="PlugIns.SshFixture.UserGuide.Options.FactoryOptions.OutputProcessorClass" class="static">Output Processor
                      Class</a>
                  </li>
                  <li>
                    <a href="PlugIns.SshFixture.UserGuide.Options.FactoryOptions.SessionClass" class="static">Session Class</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Options.OutputOptions" class="suite">Output Options *</a>
                <ul class="toc3">
                  <li>
                    <a href="PlugIns.SshFixture.UserGuide.Options.OutputOptions.IgnoreCarriageReturn" class="test">Ignore Carriage Return
                      +</a>
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
          </li>
          <li>
            <a href="PlugIns.SshFixture.UserGuide.SshTestCreation" class="suite">Ssh Test Creation *</a>
            <ul class="toc2">
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
          </li>
        </ul>
      </div>
    </article>`,
  styles: ['']
})
export class UserGuideComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }


  getPageName() {
    return 'UserGuide';
  }


}
