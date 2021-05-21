import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../../common/base-test-page';
import {PageService} from '../../../../../../service/page.service';

@Component({
  selector: 'app-script-table',
  template: `
    <article>
      <br>
      <h1 id="0">SshFixture option definition in script table</h1>
      In this page is described how to define options in SshFixture script tables.<br><br>Note: the dump-options command called in the
      following tests is available only for the mocked host: ssh-fitnesse.dev.<br><br>
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
      <h2 id="1">Define options in table header for script table</h2>
      Rules for options definition in table header are the same for <a
      href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.DecisionTable">DecisionTable</a> mode. The following test is the last example
      in <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.DecisionTable">DecisionTable</a> page adapted for script table. All
      rules and constraints for decision table and table header options definitions are valid also for script table header options
      definitions.<br><br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td>ssh client</td>
          <td>foo/bar@ssh-fitnesse.dev</td>
          <td>MY_OPTION_1 MY_OPTION_2=my-value MY_OPTION_3="my value"</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="4">open connection</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">dump-options MY_OPTION_1</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">MY_OPTION_1</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">dump-options MY_OPTION_2</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">MY_OPTION_2=my-value</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">dump-options MY_OPTION_3</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">MY_OPTION_3=my value</td>
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

|script |ssh client|foo/bar@ssh-fitnesse.dev|MY_OPTION_1 MY_OPTION_2=my-value MY_OPTION_3="my value"|
|open connection                                                                                    |
|execute|dump-options MY_OPTION_1                                                                   |
|check  |output    |MY_OPTION_1                                                                     |
|execute|dump-options MY_OPTION_2                                                                   |
|check  |output    |MY_OPTION_2=my-value                                                            |
|execute|dump-options MY_OPTION_3                                                                   |
|check  |output    |MY_OPTION_3=my value                                                            |
|close connection                                                                                   |

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
      <h2 id="2">Define options in table body for script table</h2>
      In script table body, options can be set like in table header mode via the method: options.<br><br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td>ssh client</td>
          <td>foo/bar@ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowColor0">
          <td>options</td>
          <td colspan="2">MY_OPTION_1 MY_OPTION_2=my-value MY_OPTION_3="my value"</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="3">open connection</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">dump-options MY_OPTION_1</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>MY_OPTION_1</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">dump-options MY_OPTION_2</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>MY_OPTION_2=my-value</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">dump-options MY_OPTION_3</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>MY_OPTION_3=my value</td>
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

|script |ssh client|foo/bar@ssh-fitnesse.dev                    |
|options|MY_OPTION_1 MY_OPTION_2=my-value MY_OPTION_3="my value"|
|open connection                                                |
|execute|dump-options MY_OPTION_1                               |
|check  |output    |MY_OPTION_1                                 |
|execute|dump-options MY_OPTION_2                               |
|check  |output    |MY_OPTION_2=my-value                        |
|execute|dump-options MY_OPTION_3                               |
|check  |output    |MY_OPTION_3=my value                        |
|close connection                                               |

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
      <h3 id="3">Add options</h3>
      Single options can also be added line by line in script table body. With single option add, values containing spaces does not need to
      be quoted.<br><br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td>ssh client</td>
          <td colspan="2">foo/bar@ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td colspan="3">MY_OPTION_1</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>MY_OPTION_2</td>
          <td>with value</td>
          <td>my-value</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>MY_OPTION_3</td>
          <td>with value</td>
          <td>my value</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="4">open connection</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">dump-options MY_OPTION_1</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">MY_OPTION_1</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">dump-options MY_OPTION_2</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">MY_OPTION_2=my-value</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">dump-options MY_OPTION_3</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">MY_OPTION_3=my value</td>
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

|script    |ssh client |foo/bar@ssh-fitnesse.dev|
|add option|MY_OPTION_1                         |
|add option|MY_OPTION_2|with value|my-value     |
|add option|MY_OPTION_3|with value|my value     |
|open connection                                |
|execute   |dump-options MY_OPTION_1            |
|check     |output     |MY_OPTION_1             |
|execute   |dump-options MY_OPTION_2            |
|check     |output     |MY_OPTION_2=my-value    |
|execute   |dump-options MY_OPTION_3            |
|check     |output     |MY_OPTION_3=my value    |
|close connection                               |

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
      <h3 id="4">Reset single options</h3>
      Options can be reset by name/key.<br><br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td>ssh client</td>
          <td colspan="2">foo/bar@ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>MY_OPTION_1</td>
          <td>with value</td>
          <td>my-value-1</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>MY_OPTION_2</td>
          <td>with value</td>
          <td>my-value-2</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="4">open connection</td>
        </tr>
        <tr class="slimRowColor4">
          <td>reset option</td>
          <td colspan="3">MY_OPTION_1</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">dump-options MY_OPTION_1</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2"></td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">dump-options MY_OPTION_2</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">MY_OPTION_2=my-value-2</td>
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

|script      |ssh client |foo/bar@ssh-fitnesse.dev|
|add option  |MY_OPTION_1|with value|my-value-1   |
|add option  |MY_OPTION_2|with value|my-value-2   |
|open connection                                  |
|reset option|MY_OPTION_1                         |
|execute     |dump-options MY_OPTION_1            |
|check       |output     |                        |
|execute     |dump-options MY_OPTION_2            |
|check       |output     |MY_OPTION_2=my-value-2  |
|close connection                                 |

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
      <h3 id="5">Reset all options</h3>
      Options can be reset totally calling reset options.<br><br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td>ssh client</td>
          <td colspan="2">foo/bar@ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>MY_OPTION_1</td>
          <td>with value</td>
          <td>my-value-1</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>MY_OPTION_2</td>
          <td>with value</td>
          <td>my-value-2</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="4">open connection</td>
        </tr>
        <tr class="slimRowColor9">
          <td colspan="4">reset options</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">dump-options MY_OPTION_1 MY_OPTION_2</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2"></td>
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

|script    |ssh client |foo/bar@ssh-fitnesse.dev|
|add option|MY_OPTION_1|with value|my-value-1   |
|add option|MY_OPTION_2|with value|my-value-2   |
|open connection                                |
|reset options                                  |
|execute   |dump-options MY_OPTION_1 MY_OPTION_2|
|check     |output     |                        |
|close connection                               |

!define TEST_SYSTEM {{'{'}}slim}
!path {{'$'}}{{'{'}}jsch.jar.path}
!path {{'$'}}{{'{'}}sshFixture.jar.path}
</pre>
          <br>Note: if SshFixture is not installed as a plugin, remember to set or replace properties: jsch.jar.path, sshFixture.jar.path;
          with actual paths.<br><br>Note: In this example the connection was built via username and password, that are set in plain text in
          table header. Click <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition">here</a> to view different authentication and
          credential storing methods.<br></div>
      </div>
      <br>Note: options provided via <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.DefaultInVmOptions">DefaultInVmOptions</a>
      or <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.DefaultInPropertiesFile">DefaultInPropertiesFile</a> will be restored
      if 'reset options' called.<br><br>
    </article>`,
  styles: ['']
})
export class ScriptTableComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'ScriptTableComponent';
  }


}
