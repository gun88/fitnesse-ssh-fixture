import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../../common/base-test-page';
import {PageService} from '../../../../../../service/page.service';

@Component({
  selector: 'app-replace',
  template: `
    <article>
      <br>
      <h1 id="0">SshFixture regex replace</h1>
      Replace matching regexes in fixture outputs. Replace is a list option so, each new definition will be added to the table regexes list.<br><br>Note:
      like every other option, can be defined in multiple ways, as shown in <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions">DefineOptions</a>
      page.<br><br>
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
      <h2 id="1">Simple invocation</h2>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td>ssh client</td>
          <td colspan="2">ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="4">open connection</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">echo fooabar</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">fooabar</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>REPLACE</td>
          <td>with value</td>
          <td>/foo/bar/</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">echo foobar</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">barbar</td>
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

|script    |ssh client|ssh-fitnesse.dev    |
|open connection                           |
|execute   |echo fooabar                   |
|check     |output    |fooabar             |
|add option|REPLACE   |with value|/foo/bar/|
|execute   |echo foobar                    |
|check     |output    |barbar              |
|close connection                          |

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
      <h2 id="2">Multiple replace options</h2>
      When multiple replace options provided, regex replaces will be performed depending on the list order. Also replace options defined via
      <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.DefaultInPropertiesFile">PropertiesFile</a> or <a
      href="PlugIns.SshFixture.UserGuide.Options.DefineOptions.DefaultInVmOptions">VmOptions</a> will be evaluated.<br><br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td>ssh client</td>
          <td colspan="2">ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="4">open connection</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>REPLACE</td>
          <td>with value</td>
          <td>/bar/comodo/</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>REPLACE</td>
          <td>with value</td>
          <td>/foo/bar/</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>REPLACE</td>
          <td>with value</td>
          <td>/comodo/foo/</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">echo foobar; echo foo 1&gt;&amp;2</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">barfoo</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>error</td>
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

|script    |ssh client|ssh-fitnesse.dev       |
|open connection                              |
|add option|REPLACE   |with value|/bar/comodo/|
|add option|REPLACE   |with value|/foo/bar/   |
|add option|REPLACE   |with value|/comodo/foo/|
|execute   |echo foobar; echo foo 1&gt;&amp;2        |
|check     |output    |barfoo                 |
|check     |error     |bar                    |
|close connection                             |

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
export class ReplaceComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'ReplaceComponent';
  }


}
