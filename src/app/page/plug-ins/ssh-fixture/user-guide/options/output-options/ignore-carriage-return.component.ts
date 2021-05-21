import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../../common/base-test-page';
import {PageService} from '../../../../../../service/page.service';

@Component({
  selector: 'app-ignore-carriage-return',
  template: `
    <article>
      <br>
      <h1 id="0">SshFixture ignore carriage return</h1>
      The default behaviour for SshFixture is to manage carriage returns like terminals. If this option is enabled, carriage return will be
      processed as normal text char. This option is a flag, so it just needs to be set (or unset) to works. Ignore carriage return is a
      single value option so, each new definition will overwrite the previous one.<br><br>Note: like every other option, can be defined in
      multiple ways, as shown in <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions">DefineOptions</a> page.<br><br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>import</td>
        </tr>
        <tr class="slimRowColor0">
          <td>com.github.gun88.fitnesse.fixture.ssh</td>
        </tr>
        </tbody>
      </table>
      <br>
      <h2 id="1">Test ignore carriage return</h2>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td>ssh client</td>
          <td>ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="3">open connection</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">echo -e "foobar\\rhi!"</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>hi!</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td colspan="2">IGNORE_CARRIAGE_RETURN</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">echo -e "foobar\\rhi!"</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>=~/foobar\\rhi!/</td>
        </tr>
        <tr class="slimRowColor4">
          <td>reset option</td>
          <td colspan="2">IGNORE_CARRIAGE_RETURN</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">echo -e "foobar\\rhi!"</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>hi!</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="3">close connection</td>
        </tr>
        </tbody>
      </table>
      <br>
      <div class="collapsible closed">
        <ul>
          <li><a href="#" class="expandall">Expand</a></li>
          <li><a href="#" class="collapseall">Collapse</a></li>
        </ul>
        <p class="title">code</p>
        <div><pre>|import                               |
|com.github.gun88.fitnesse.fixture.ssh|

|script      |ssh client|ssh-fitnesse.dev|
|open connection                         |
|execute     |echo -e "foobar\\rhi!"      |
|check       |output    |hi!             |
|add option  |IGNORE_CARRIAGE_RETURN     |
|execute     |echo -e "foobar\\rhi!"      |
|check       |output    |=~/foobar\\rhi!/ |
|reset option|IGNORE_CARRIAGE_RETURN     |
|execute     |echo -e "foobar\\rhi!"      |
|check       |output    |hi!             |
|close connection                        |

!define TEST_SYSTEM {{'{'}}slim}
!path {{'$'}}{{'{'}}jsch.jar.path}
!path {{'$'}}{{'{'}}sshFixture.jar.path}
</pre>
          <br>Note: if SshFixture is not installed as a plugin, remember to set or replace properties: jsch.jar.path, sshFixture.jar.path;
          with actual paths.<br><br>Note: In this example the connection was built via username and password, that are set in plain text in
          table header. Click <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition">here</a> to view different authentication and
          credential storing methods.<br></div>
      </div>
    </article>`,
  styles: ['']
})
export class IgnoreCarriageReturnComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'IgnoreCarriageReturnComponent';
  }


}
