import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../../common/base-test-page';
import {PageService} from '../../../../../../service/page.service';

@Component({
  selector: 'app-decision-table',
  template: `
    <article>
      <br>
      <h1 id="0">SshFixture option definition in decision table</h1>
      In this page is described how to define options in SshFixture decision tables. When a decision table is used, SshFixture options must
      be defined after endpoint.<br><br>Note: the dump-options command called in the following tests is available only for the mocked host:
      ssh-fitnesse.dev.<br><br>
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
      <h2 id="1">Define flag/boolean option in table header</h2>
      Single option (without value) can be used for flag/boolean options (like <a
      href="PlugIns.SshFixture.UserGuide.Options.PreformattedOutput">PREFORMATTED</a> or <a
      href="PlugIns.SshFixture.UserGuide.Options.IgnoreCarriageReturn">IGNORE_CARRIAGE_RETURN</a>).<br><br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>ssh client</td>
          <td>foo/bar@ssh-fitnesse.dev</td>
          <td>MY_OPTION</td>
        </tr>
        <tr class="slimRowTitle">
          <td>command</td>
          <td colspan="2">output?</td>
        </tr>
        <tr class="slimRowColor1">
          <td>dump-options MY_OPTION</td>
          <td colspan="2">MY_OPTION</td>
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

|ssh client            |foo/bar@ssh-fitnesse.dev|MY_OPTION|
|command               |output?                           |
|dump-options MY_OPTION|MY_OPTION                         |

!define TEST_SYSTEM {{'{'}}slim}
!path {{'$'}}{{'{'}}jsch.jar.path}
!path {{'$'}}{{'{'}}sshFixture.jar.path}
</pre>
          <br>Note: if SshFixture is not installed as a plugin, remember to set or replace properties: jsch.jar.path, sshFixture.jar.path;
          with actual paths.<br><br>Note: In this example the connection was built via username and password, that are set in plain text in
          table header. Click <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition">here</a> to view different authentication and
          credential storing methods.<br></div>
      </div>
      <br>
      <h2 id="2">Define option with value in table header</h2>
      When an option with value is defined, the option key must be followed by equal sign and value.<br><br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>ssh client</td>
          <td>foo/bar@ssh-fitnesse.dev</td>
          <td>MY_OPTION=my-value</td>
        </tr>
        <tr class="slimRowTitle">
          <td>command</td>
          <td colspan="2">output?</td>
        </tr>
        <tr class="slimRowColor1">
          <td>dump-options MY_OPTION</td>
          <td colspan="2">MY_OPTION=my-value</td>
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

|ssh client            |foo/bar@ssh-fitnesse.dev|MY_OPTION=my-value|
|command               |output?                                    |
|dump-options MY_OPTION|MY_OPTION=my-value                         |

!define TEST_SYSTEM {{'{'}}slim}
!path {{'$'}}{{'{'}}jsch.jar.path}
!path {{'$'}}{{'{'}}sshFixture.jar.path}
</pre>
          <br>Note: if SshFixture is not installed as a plugin, remember to set or replace properties: jsch.jar.path, sshFixture.jar.path;
          with actual paths.<br><br>Note: In this example the connection was built via username and password, that are set in plain text in
          table header. Click <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition">here</a> to view different authentication and
          credential storing methods.<br></div>
      </div>
      <br>
      <h2 id="3">Define option with spaces in table header</h2>
      When spaces are contained in option value, option value must be quoted.<br><br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>ssh client</td>
          <td>foo/bar@ssh-fitnesse.dev</td>
          <td>MY_OPTION="my value"</td>
        </tr>
        <tr class="slimRowTitle">
          <td>command</td>
          <td colspan="2">output?</td>
        </tr>
        <tr class="slimRowColor1">
          <td>dump-options MY_OPTION</td>
          <td colspan="2">MY_OPTION=my value</td>
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

|ssh client            |foo/bar@ssh-fitnesse.dev|MY_OPTION="my value"|
|command               |output?                                      |
|dump-options MY_OPTION|MY_OPTION=my value                           |

!define TEST_SYSTEM {{'{'}}slim}
!path {{'$'}}{{'{'}}jsch.jar.path}
!path {{'$'}}{{'{'}}sshFixture.jar.path}
</pre>
          <br>Note: if SshFixture is not installed as a plugin, remember to set or replace properties: jsch.jar.path, sshFixture.jar.path;
          with actual paths.<br><br>Note: In this example the connection was built via username and password, that are set in plain text in
          table header. Click <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition">here</a> to view different authentication and
          credential storing methods.<br></div>
      </div>
      <br>
      <h2 id="4">Define multiple options in table header</h2>
      Multiple options in table header must be separated by spaces.<br><br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>ssh client</td>
          <td>foo/bar@ssh-fitnesse.dev</td>
          <td>MY_OPTION_1 MY_OPTION_2=my-value MY_OPTION_3="my value"</td>
        </tr>
        <tr class="slimRowTitle">
          <td>command</td>
          <td colspan="2">output?</td>
        </tr>
        <tr class="slimRowColor1">
          <td>dump-options MY_OPTION_1</td>
          <td colspan="2">MY_OPTION_1</td>
        </tr>
        <tr class="slimRowColor0">
          <td>dump-options MY_OPTION_2</td>
          <td colspan="2">MY_OPTION_2=my-value</td>
        </tr>
        <tr class="slimRowColor1">
          <td>dump-options MY_OPTION_3</td>
          <td colspan="2">MY_OPTION_3=my value</td>
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

|ssh client              |foo/bar@ssh-fitnesse.dev|MY_OPTION_1 MY_OPTION_2=my-value MY_OPTION_3="my value"|
|command                 |output?                                                                         |
|dump-options MY_OPTION_1|MY_OPTION_1                                                                     |
|dump-options MY_OPTION_2|MY_OPTION_2=my-value                                                            |
|dump-options MY_OPTION_3|MY_OPTION_3=my value                                                            |

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
export class DecisionTableComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'DecisionTableComponent';
  }


}
