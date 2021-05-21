import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../../common/base-test-page';
import {PageService} from '../../../../../../service/page.service';

@Component({
  selector: 'app-passphrase',
  template: `
    <article>
      <br>
      <h1 id="0">SshFixture passphrase</h1>
      This option is used to define the passphrase file path or content. If option content does not match a file path, is evaluated as a
      file content. In default implementation (jsch session) passphrase will be evaluated only if private key is set. In test implementation
      (dummy session) this option is ignored. Other behaviours can be implemented with <a
      href="PlugIns.SshFixture.UserGuide.Customization.CustomSession">CustomSession</a>. Passphrase is a single value option so, each new
      definition will overwrite the previous one.<br><br>Note: like every other option, can be defined in multiple ways, as shown in <a
      href="PlugIns.SshFixture.UserGuide.Options.DefineOptions">DefineOptions</a> page.<br><br>
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
      <h2 id="1">Define as path</h2>
      <br>
      <div class="collapsible closed">
        <ul>
          <li><a href="#" class="expandall">Expand</a></li>
          <li><a href="#" class="collapseall">Collapse</a></li>
        </ul>
        <p class="title">definitions</p>
        <div><span class="meta">variable defined: PRIVATE_KEY=/path/to/my/private/key/file</span>
          <br><span class="meta">variable defined: PASSPHRASE=/path/to/my/passphrase/file</span>
          <br></div>
      </div>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td>ssh client</td>
          <td colspan="2">ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>PRIVATE_KEY</td>
          <td>with value</td>
          <td>/path/to/my/private/key/file</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>PASSPHRASE</td>
          <td>with value</td>
          <td>/path/to/my/passphrase/file</td>
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

!define PRIVATE_KEY {{'{'}}/path/to/my/private/key/file}
!define PASSPHRASE {{'{'}}/path/to/my/passphrase/file}

|script    |ssh client |ssh-fitnesse.dev         |
|add option|PRIVATE_KEY|with value|{{'$'}}{{'{'}}PRIVATE_KEY}|
|add option|PASSPHRASE |with value|{{'$'}}{{'{'}}PASSPHRASE} |
|open connection                                 |
|execute   |echo foobar                          |
|check     |output     |foobar                   |
|close connection                                |

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
      <h2 id="2">Define as content</h2>
      <br>
      <div class="collapsible closed">
        <ul>
          <li><a href="#" class="expandall">Expand</a></li>
          <li><a href="#" class="collapseall">Collapse</a></li>
        </ul>
        <p class="title">definitions</p>
        <div><span class="meta">variable defined: PRIVATE_KEY=/path/to/my/private/key/file</span>
          <br><span class="meta">variable defined: PASSPHRASE=my-pass-secret</span>
          <br></div>
      </div>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td>ssh client</td>
          <td colspan="2">ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>PRIVATE_KEY</td>
          <td>with value</td>
          <td>/path/to/my/private/key/file</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>PASSPHRASE</td>
          <td>with value</td>
          <td>my-pass-secret</td>
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

!define PRIVATE_KEY {{'{'}}/path/to/my/private/key/file}
!define PASSPHRASE {{'{'}}my-pass-secret}

|script    |ssh client |ssh-fitnesse.dev         |
|add option|PRIVATE_KEY|with value|{{'$'}}{{'{'}}PRIVATE_KEY}|
|add option|PASSPHRASE |with value|{{'$'}}{{'{'}}PASSPHRASE} |
|open connection                                 |
|execute   |echo foobar                          |
|check     |output     |foobar                   |
|close connection                                |

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
export class PassphraseComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'PassphraseComponent';
  }


}
