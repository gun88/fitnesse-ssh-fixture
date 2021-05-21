import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../../common/base-test-page';
import {PageService} from '../../../../../../service/page.service';

@Component({
  selector: 'app-private-key',
  template: `
    <article>
      <br>
      <h1 id="0">SshFixture private key</h1>
      This option is used to define the private-key file path or content. If option content does not match a file path, is evaluated as a
      file content. In default implementation (jsch session) if not set, server connection is authenticated via password. In test
      implementation (dummy session) this option is ignored. Other behaviours can be implemented with <a
      href="PlugIns.SshFixture.UserGuide.Customization.CustomSession">CustomSession</a>. Private key is a single value option so, each new
      definition will overwrite the previous one.<br><br>Note: with default session implementation (jsch), keys format must be RSA.<br><br>Note:
      if needed, also <a href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.Passphrase">Passphrase</a> and <a
      href="PlugIns.SshFixture.UserGuide.Options.EndpointOptions.PublicKey">PublicKey</a> can be defined.<br><br>Note: like every other
      option, can be defined in multiple ways, as shown in <a href="PlugIns.SshFixture.UserGuide.Options.DefineOptions">DefineOptions</a>
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
      <h2 id="1">Define as path</h2>
      <br>
      <div class="collapsible closed">
        <ul>
          <li><a href="#" class="expandall">Expand</a></li>
          <li><a href="#" class="collapseall">Collapse</a></li>
        </ul>
        <p class="title">definitions</p>
        <div><span class="meta">variable defined: PRIVATE_KEY=/path/to/my/private/key/file</span>
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

|script    |ssh client |ssh-fitnesse.dev         |
|add option|PRIVATE_KEY|with value|{{'$'}}{{'{'}}PRIVATE_KEY}|
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
        <div><span class="meta">variable defined: PRIVATE_KEY= {{'{'}}{{'{'}}{{'{'}}-----BEGIN RSA PRIVATE KEY-----
Proc-Type: 4,ENCRYPTED
DEK-Info: AES-128-CBC,65A4UPHGFA0C9567744EFBC6EC3BE7BE

MB6u1XVUHo7MYNi2n8bLDueURtN0zYOdv5wJ5dlO2Cxcs+3IDURO4ItMXNjQmPcI
4N++NH3YsFYYNYzosGwsj6xuTn6AiSQTbBhxgL59dzpl9sq0HHeCJ11EGursHfAN
I5CfkC410QTXpVv8MQ/uXyWIPBxTrfvUxLMKNCwo1SfV4y2zuAKy8POZyvyVdohX
GNM6XwTsYvaVCJxKJGuZPjjcuRy7Pomj4oq+4+YArGCvivj2jATluIKaxFj7qEcK
Ar3SPAbRSGziDWMkeGmBbC15epzOtC0x2KqzpxxoEdKYlLHghn4W1lsdg/0H5M2E
...
ukH0tLZyd6P4+bI6koiipq7YylQqMpCZakv4jPqhm8WzpPWsF+88PocMTOgfb4O/
5T+eCE+Fxg36wVbvCUDe/dkyEnUbWRnHmEZdxWGPini9QvFFKn2HuaPsCTWxVgfm
rCzSPY6CH0U/QJcK5K2SlP3L/Blrt+/Axx6rXc1puZTWxxlX2saZD6a5J9u9QF/w
-----END RSA PRIVATE KEY-----
}}} </span>
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
          <td><pre>-----BEGIN RSA PRIVATE KEY-----
Proc-Type: 4,ENCRYPTED
DEK-Info: AES-128-CBC,65A4UPHGFA0C9567744EFBC6EC3BE7BE

MB6u1XVUHo7MYNi2n8bLDueURtN0zYOdv5wJ5dlO2Cxcs+3IDURO4ItMXNjQmPcI
4N++NH3YsFYYNYzosGwsj6xuTn6AiSQTbBhxgL59dzpl9sq0HHeCJ11EGursHfAN
I5CfkC410QTXpVv8MQ/uXyWIPBxTrfvUxLMKNCwo1SfV4y2zuAKy8POZyvyVdohX
GNM6XwTsYvaVCJxKJGuZPjjcuRy7Pomj4oq+4+YArGCvivj2jATluIKaxFj7qEcK
Ar3SPAbRSGziDWMkeGmBbC15epzOtC0x2KqzpxxoEdKYlLHghn4W1lsdg/0H5M2E
...
ukH0tLZyd6P4+bI6koiipq7YylQqMpCZakv4jPqhm8WzpPWsF+88PocMTOgfb4O/
5T+eCE+Fxg36wVbvCUDe/dkyEnUbWRnHmEZdxWGPini9QvFFKn2HuaPsCTWxVgfm
rCzSPY6CH0U/QJcK5K2SlP3L/Blrt+/Axx6rXc1puZTWxxlX2saZD6a5J9u9QF/w
-----END RSA PRIVATE KEY-----
</pre>
          </td>
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

!define PRIVATE_KEY {{'{'}} {{'{'}}{{'{'}}{{'{'}}-----BEGIN RSA PRIVATE KEY-----
Proc-Type: 4,ENCRYPTED
DEK-Info: AES-128-CBC,65A4UPHGFA0C9567744EFBC6EC3BE7BE

MB6u1XVUHo7MYNi2n8bLDueURtN0zYOdv5wJ5dlO2Cxcs+3IDURO4ItMXNjQmPcI
4N++NH3YsFYYNYzosGwsj6xuTn6AiSQTbBhxgL59dzpl9sq0HHeCJ11EGursHfAN
I5CfkC410QTXpVv8MQ/uXyWIPBxTrfvUxLMKNCwo1SfV4y2zuAKy8POZyvyVdohX
GNM6XwTsYvaVCJxKJGuZPjjcuRy7Pomj4oq+4+YArGCvivj2jATluIKaxFj7qEcK
Ar3SPAbRSGziDWMkeGmBbC15epzOtC0x2KqzpxxoEdKYlLHghn4W1lsdg/0H5M2E
...
ukH0tLZyd6P4+bI6koiipq7YylQqMpCZakv4jPqhm8WzpPWsF+88PocMTOgfb4O/
5T+eCE+Fxg36wVbvCUDe/dkyEnUbWRnHmEZdxWGPini9QvFFKn2HuaPsCTWxVgfm
rCzSPY6CH0U/QJcK5K2SlP3L/Blrt+/Axx6rXc1puZTWxxlX2saZD6a5J9u9QF/w
-----END RSA PRIVATE KEY-----
}}} }

|script    |ssh client |ssh-fitnesse.dev         |
|add option|PRIVATE_KEY|with value|{{'$'}}{{'{'}}PRIVATE_KEY}|
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
export class PrivateKeyComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'PrivateKeyComponent';
  }


}
