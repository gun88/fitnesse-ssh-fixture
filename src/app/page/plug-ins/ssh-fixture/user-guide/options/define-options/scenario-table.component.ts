import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../../common/base-test-page';
import {PageService} from '../../../../../../service/page.service';

@Component({
  selector: 'app-scenario-table',
  template: `
    <article>
      <br>
      <h1 id="0">SshFixture option definition in scenario table</h1>
      In this page is described how to define options in SshFixture scenario tables. These definitions can be easily reused in <a
      href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.ScriptTable">ScriptTable</a> mode.<br><br>
      <h2 id="1">Define options in table body for scenario table</h2>
      In scenario table body, options can be set like in table header mode via the method: options.<br><br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>scenario</td>
          <td>load options</td>
        </tr>
        <tr class="slimRowColor0">
          <td>options</td>
          <td>MY_OPTION_1 MY_OPTION_2=my-value MY_OPTION_3="my value"</td>
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
          <td colspan="3">load options</td>
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

|scenario|load options                                           |
|options |MY_OPTION_1 MY_OPTION_2=my-value MY_OPTION_3="my value"|

|script |ssh client|foo/bar@ssh-fitnesse.dev|
|load options                               |
|open connection                            |
|execute|dump-options MY_OPTION_1           |
|check  |output    |MY_OPTION_1             |
|execute|dump-options MY_OPTION_2           |
|check  |output    |MY_OPTION_2=my-value    |
|execute|dump-options MY_OPTION_3           |
|check  |output    |MY_OPTION_3=my value    |
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
      <br>
      <h3 id="2">Add options</h3>
      Single options can also be added line by line in scenario table body. With single option add, values containing spaces does not need
      to be quoted.<br><br>
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
          <td>my-Value</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>MY_OPTION_3</td>
          <td>with value</td>
          <td>my Value</td>
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
          <td colspan="3">load options</td>
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
          <td>MY_OPTION_2=my-Value</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">dump-options MY_OPTION_3</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>MY_OPTION_3=my Value</td>
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
|add option|MY_OPTION_2|with value|my-Value|
|add option|MY_OPTION_3|with value|my Value|

|script |ssh client|foo/bar@ssh-fitnesse.dev|
|load options                               |
|open connection                            |
|execute|dump-options MY_OPTION_1           |
|check  |output    |MY_OPTION_1             |
|execute|dump-options MY_OPTION_2           |
|check  |output    |MY_OPTION_2=my-Value    |
|execute|dump-options MY_OPTION_3           |
|check  |output    |MY_OPTION_3=my Value    |
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
      <br>
      <h3 id="3">Improve scenarios</h3>
      To know more about scenario tables,
      click <a target="_blank" href="http://fitnesse.org/FitNesse.UserGuide.WritingAcceptanceTests.SliM.ScenarioTable">here</a>
    </article>`,
  styles: ['']
})
export class ScenarioTableComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'ScenarioTableComponent';
  }


}
