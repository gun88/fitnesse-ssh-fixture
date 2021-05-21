import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-using-scenarios',
  template: `
    <article>
      <br>Scenarios could be useful to define command sequences, reuse options and endpoints definitions. For more details on scenarios,
      click <a target="_blank" href="http://fitnesse.org/FitNesse.UserGuide.WritingAcceptanceTests.SliM.ScenarioTable">here</a><br><br>
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
      <hr>
      <br>
      <h3 id="0">Scenario for multiple commands</h3>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>scenario</td>
          <td>save</td>
          <td>first</td>
          <td>and</td>
          <td>second</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="4">echo @first &gt;demo.file.1.txt</td>
        </tr>
        <tr class="slimRowColor8">
          <td>$firstResult=</td>
          <td colspan="4">output</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>exit code</td>
          <td colspan="3">0</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="4">echo @second &gt;demo.file.2.txt</td>
        </tr>
        <tr class="slimRowColor2">
          <td>$secondResult=</td>
          <td colspan="4">output</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>exit code</td>
          <td colspan="3">0</td>
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
        <tr class="slimRowColor8">
          <td colspan="4">open connection</td>
        </tr>
        <tr class="slimRowColor1">
          <td>save</td>
          <td>foo</td>
          <td>and</td>
          <td>bar</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">cat demo.file.1.txt</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">foo</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">cat demo.file.2.txt</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">bar</td>
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

|scenario      |save     |first|and|second   |
|execute       |echo @first &gt;demo.file.1.txt |
|$firstResult= |output                       |
|check         |exit code|0                  |
|execute       |echo @second &gt;demo.file.2.txt|
|$secondResult=|output                       |
|check         |exit code|0                  |

|script |ssh client|foo/bar@ssh-fitnesse.dev|
|open connection                            |
|save   |foo       |and|bar                 |
|execute|cat demo.file.1.txt                |
|check  |output    |foo                     |
|execute|cat demo.file.2.txt                |
|check  |output    |bar                     |
|close connection                           |

!define TEST_SYSTEM {{'{'}}slim}
!path {{'$'}}{{'{'}}jsch.jar.path}
!path {{'$'}}{{'{'}}sshFixture.jar.path}
</pre>
          <br>Note: if SshFixture is not installed as a plugin, remember to set or replace properties: jsch.jar.path, sshFixture.jar.path;
          with actual paths.<br><br>Note: In this example the connection was built via username and password, that are set in plain text in
          table header. Click <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition">here</a> to view different authentication and
          credential storing methods.<br></div>
      </div>
      <hr>
      <br>
      <h3 id="1">Scenario for options definition</h3>
      To know more details on SshFixture options, click <a href="PlugIns.SshFixture.UserGuide.Options">here</a><br><br>Note: the
      dump-options command called in the following tests is available only for the mocked host: ssh-fitnesse.dev.<br><br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>scenario</td>
          <td colspan="3">load options</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td colspan="3">MY_OPTION_1</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>MY_OPTION_2</td>
          <td>with value</td>
          <td>my value</td>
        </tr>
        </tbody>
      </table>
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
        <tr class="slimRowColor8">
          <td colspan="3">load options</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">dump-options</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>MY_OPTION_1 MY_OPTION_2=my value</td>
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

|scenario  |load options                   |
|add option|MY_OPTION_1                    |
|add option|MY_OPTION_2|with value|my value|

|script |ssh client|foo/bar@ssh-fitnesse.dev        |
|open connection                                    |
|load options                                       |
|execute|dump-options                               |
|check  |output    |MY_OPTION_1 MY_OPTION_2=my value|
|close connection                                   |

!define TEST_SYSTEM {{'{'}}slim}
!path {{'$'}}{{'{'}}jsch.jar.path}
!path {{'$'}}{{'{'}}sshFixture.jar.path}
</pre>
          <br>Note: if SshFixture is not installed as a plugin, remember to set or replace properties: jsch.jar.path, sshFixture.jar.path;
          with actual paths.<br><br>Note: In this example the connection was built via username and password, that are set in plain text in
          table header. Click <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition">here</a> to view different authentication and
          credential storing methods.<br></div>
      </div>
      <hr>
      <br>
      <h3 id="2">Scenario for endpoint definition</h3>
      To know more details on SshFixture endpoint definitions, click <a
      href="PlugIns.SshFixture.UserGuide.EndpointDefinition">here</a><br><br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>scenario</td>
          <td>load endpoint</td>
        </tr>
        <tr class="slimRowColor4">
          <td>username</td>
          <td>foo</td>
        </tr>
        <tr class="slimRowColor3">
          <td>password</td>
          <td>bar</td>
        </tr>
        <tr class="slimRowColor6">
          <td>host</td>
          <td>ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowColor3">
          <td>port</td>
          <td>1234</td>
        </tr>
        </tbody>
      </table>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td colspan="2">ssh client</td>
        </tr>
        <tr class="slimRowColor3">
          <td colspan="3">load endpoint</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="3">open connection</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">dump-endpoint</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>foo/bar@ssh-fitnesse.dev:1234</td>
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

|scenario|load endpoint   |
|username|foo             |
|password|bar             |
|host    |ssh-fitnesse.dev|
|port    |1234            |

|script |ssh client                          |
|load endpoint                               |
|open connection                             |
|execute|dump-endpoint                       |
|check  |output|foo/bar@ssh-fitnesse.dev:1234|
|close connection                            |

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
export class UsingScenariosComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'UsingScenariosComponent';
  }


}
