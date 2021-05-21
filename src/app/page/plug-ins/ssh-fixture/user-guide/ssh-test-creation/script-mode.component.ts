import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-script-mode',
  template: `
    <article>
      <br>
      <h2 id="0">Script Mode</h2>
      Script table can also be used to define SshFixture test.<br><br>
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
      <br>The endpoint string (foo/bar@ssh-fitnesse.dev) can be defined in multiple ways:<br>
      <ol>
        <li>Table header</li>
        <li>Table body with single string</li>
        <li>Table body with multiple parameters</li>
        <li><a href="PlugIns.SshFixture.UserGuide.EndpointDefinition.VmOptions">VM options</a></li>
        <li><a href="PlugIns.SshFixture.UserGuide.EndpointDefinition.PropertiesFile">properties file</a>)</li>
      </ol>
      <br>To know more about endpoint definition in script table, click <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition">here</a>.
      In this page will be used the table header endpoint definition.<br><br>Differently from <a
      href="PlugIns.SshFixture.UserGuide.SshTestCreation.DecisionTableMode">DecisionTableMode</a>, in script mode, the connection must be
      opened and closed explicitly (it is also possible to close connection, change endpoint )<br>On table begin, a connection to the
      defined endpoint will be opened and closed on table end.<br>The decision table take as input a command string. Its available outputs
      are:<br>
      <ol>
        <li>standard output stream</li>
        <li>standard error stream</li>
        <li>execution exit code</li>
      </ol>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td>ssh client</td>
          <td>foo/bar@ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="3">open connection</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">echo foo-bar</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>foo-bar</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>exit code</td>
          <td>0</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">echo foo-bar 1&gt;&amp;2</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>error</td>
          <td>foo-bar</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>exit code</td>
          <td>0</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">exit 123</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>exit code</td>
          <td>123</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">echo foo; echo bar 1&gt;&amp;2; exit 234</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>foo</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>error</td>
          <td>bar</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>exit code</td>
          <td>234</td>
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

|script |ssh client|foo/bar@ssh-fitnesse.dev|
|open connection                            |
|execute|echo foo-bar                       |
|check  |output    |foo-bar                 |
|check  |exit code |0                       |
|execute|echo foo-bar 1&gt;&amp;2                  |
|check  |error     |foo-bar                 |
|check  |exit code |0                       |
|execute|exit 123                           |
|check  |exit code |123                     |
|execute|echo foo; echo bar 1&gt;&amp;2; exit 234  |
|check  |output    |foo                     |
|check  |error     |bar                     |
|check  |exit code |234                     |
|close connection                           |

|ssh client  |foo/bar@ssh-fitnesse.dev|
|command     |output?                 |
|echo foo-bar|foo-bar                 |

|ssh client       |foo/bar@ssh-fitnesse.dev|
|command          |error?                  |
|echo foo-bar 1&gt;&amp;2|foo-bar                 |

|ssh client|foo/bar@ssh-fitnesse.dev|
|command   |exitCode?               |
|exit 123  |123                     |

!define TEST_SYSTEM {{'{'}}slim}
!path {{'$'}}{{'{'}}jsch.jar.path}
!path {{'$'}}{{'{'}}sshFixture.jar.path}
</pre>
          <br>Note: if SshFixture is not installed as a plugin, remember to set or replace properties: jsch.jar.path, sshFixture.jar.path;
          with actual paths.<br><br>Note: In this example the connection was built via username and password, that are set in plain text in
          table header. Click <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition">here</a> to view different authentication and
          credential storing methods.<br><br></div>
      </div>
    </article>`,
  styles: ['']
})
export class ScriptModeComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'ScriptModeComponent';
  }


}
