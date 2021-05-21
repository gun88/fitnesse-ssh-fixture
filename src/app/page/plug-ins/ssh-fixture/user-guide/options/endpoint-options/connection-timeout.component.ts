import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../../common/base-test-page';
import {PageService} from '../../../../../../service/page.service';

@Component({
  selector: 'app-connection-timeout',
  template: `
    <article>
      <br>
      <h1 id="0">SshFixture connection timeout</h1>
      Maximum milliseconds amount to establish a connection with server. Default value is: no timeout. Connection timeout is a single value
      option so, each new definition will overwrite the previous one.<br><br>Note: like every other option, can be defined in multiple ways,
      as shown in <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions">DefineOptions</a> page.<br><br>
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
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td>ssh client</td>
          <td colspan="2">foo/bar@ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>CONNECTION_TIMEOUT</td>
          <td>with value</td>
          <td>5000</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="4">open connection</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">echo foobar</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">foobar</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="4">close connection</td>
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

|script    |ssh client        |foo/bar@ssh-fitnesse.dev|
|add option|CONNECTION_TIMEOUT|with value|5000         |
|open connection                                       |
|execute   |echo foobar                                |
|check     |output            |foobar                  |
|close connection                                      |

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
export class ConnectionTimeoutComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'ConnectionTimeoutComponent';
  }


}
