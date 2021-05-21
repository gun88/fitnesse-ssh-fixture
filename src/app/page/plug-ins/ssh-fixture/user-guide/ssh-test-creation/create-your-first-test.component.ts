import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-create-your-first-test',
  template: `
    <article>
      <br>
      <h2 id="0">Create your first test</h2>
      To create your first test, retrieve your ssh server endpoint and credential, then copy the following table and replace
      foo/bar@ssh-fitnesse.dev with: [username]/[password]@[hostname]:[port]. If your connection port is 22 (the default one) you can omit
      it.<br><br>
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
      <pre>|import                               |
|com.github.gun88.fitnesse.fixture.ssh|

|ssh client                       |foo/bar@ssh-fitnesse.dev |
|command                          |output?|error? |exitCode?|
|echo foo-bar                     |foo-bar|       |0        |
|echo foo-bar 1&gt;&amp;2                |       |foo-bar|0        |
|exit 123                         |       |       |123      |
|echo foo; echo bar 1&gt;&amp;2; exit 234|foo    |bar    |234      |

!define TEST_SYSTEM {{'{'}}slim}
!path {{'$'}}{{'{'}}jsch.jar.path}
!path {{'$'}}{{'{'}}sshFixture.jar.path}
</pre>
      <br>Note: if SshFixture is not installed as a plugin, remember to set or replace properties: jsch.jar.path, sshFixture.jar.path; with
      actual paths.<br><br>Note: In this example the connection was built via username and password, that are set in plain text in table
      header. Click <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition">here</a> to view different authentication and credential
      storing methods.
    </article>`,
  styles: ['']
})
export class CreateYourFirstTestComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'CreateYourFirstTestComponent';
  }


}
