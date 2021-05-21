import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-decision-table-mode-component',
  template: `
    <article>
      <br>
      <h2 id="0">Decision Table Mode</h2>
      Decision table mode is the simplest way to create test for SshFixture in fact, the main example, is the same described in <a
      href="PlugIns.SshFixture.UserGuide.SshTestCreation.CreateYourFirstTest">CreateYourFirstTest</a> page. In this page, more details are
      described to explain what happen under the hood.<br><br>
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
      <br>The endpoint string (foo/bar@ssh-fitnesse.dev) must be defined in table header (if not defined via <a
      href="PlugIns.SshFixture.UserGuide.EndpointDefinition.VmOptions">VM options</a> or <a
      href="PlugIns.SshFixture.UserGuide.EndpointDefinition.PropertiesFile">properties file</a>).<br><br>On table begin, a connection to the
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
          <td>ssh client</td>
          <td colspan="3">foo/bar@ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowTitle">
          <td>command</td>
          <td>output?</td>
          <td>error?</td>
          <td>exitCode?</td>
        </tr>
        <tr class="slimRowColor1">
          <td>echo foo-bar</td>
          <td>foo-bar</td>
          <td></td>
          <td>0</td>
        </tr>
        <tr class="slimRowColor0">
          <td>echo foo-bar 1&gt;&amp;2</td>
          <td></td>
          <td>foo-bar</td>
          <td>0</td>
        </tr>
        <tr class="slimRowColor1">
          <td>exit 123</td>
          <td></td>
          <td></td>
          <td>123</td>
        </tr>
        <tr class="slimRowColor0">
          <td>echo foo; echo bar 1&gt;&amp;2; exit 234</td>
          <td>foo</td>
          <td>bar</td>
          <td>234</td>
        </tr>
        </tbody>
      </table>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>ssh client</td>
          <td>foo/bar@ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowTitle">
          <td>command</td>
          <td>output?</td>
        </tr>
        <tr class="slimRowColor1">
          <td>echo foo-bar</td>
          <td>foo-bar</td>
        </tr>
        </tbody>
      </table>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>ssh client</td>
          <td>foo/bar@ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowTitle">
          <td>command</td>
          <td>error?</td>
        </tr>
        <tr class="slimRowColor1">
          <td>echo foo-bar 1&gt;&amp;2</td>
          <td>foo-bar</td>
        </tr>
        </tbody>
      </table>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>ssh client</td>
          <td>foo/bar@ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowTitle">
          <td>command</td>
          <td>exitCode?</td>
        </tr>
        <tr class="slimRowColor1">
          <td>exit 123</td>
          <td>123</td>
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

|ssh client                       |foo/bar@ssh-fitnesse.dev |
|command                          |output?|error? |exitCode?|
|echo foo-bar                     |foo-bar|       |0        |
|echo foo-bar 1&gt;&amp;2                |       |foo-bar|0        |
|exit 123                         |       |       |123      |
|echo foo; echo bar 1&gt;&amp;2; exit 234|foo    |bar    |234      |

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
export class DecisionTableModeComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'DecisionTableModeComponent';
  }


}
