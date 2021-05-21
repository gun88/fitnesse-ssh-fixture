import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../../common/base-test-page';
import {PageService} from '../../../../../../service/page.service';

@Component({
  selector: 'app-terminal-width',
  template: `
    <article>
      <br>
      <h1 id="0">SshFixture terminal width</h1>
      Emulate max terminal width size. Default value is: no max width. Terminal width is a single value option so, each new definition will
      overwrite the previous one.<br><br>Note: like every other option, can be defined in multiple ways, as shown in <a
      href="PlugIns.SshFixture.UserGuide.Options.DefineOptions">DefineOptions</a> page.<br><br>Note: suggested use with PREFORMATTED option
      enabled.<br><br>
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
      <div class="collapsible closed">
        <ul>
          <li><a href="#" class="expandall">Expand</a></li>
          <li><a href="#" class="collapseall">Collapse</a></li>
        </ul>
        <p class="title">Definitions</p>
        <div><span class="meta">variable defined: output= {{'{'}}{{'{'}}{{'{'}}012345678901234567890123456789}}} </span>
          <br><span class="meta">variable defined: output_5= {{'{'}}{{'{'}}{{'{'}}01234
56789
01234
56789
01234
56789
}}} </span>
          <br><span class="meta">variable defined: output_10= {{'{'}}{{'{'}}{{'{'}}0123456789
0123456789
0123456789
}}} </span>
          <br><br></div>
      </div>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td>ssh client</td>
          <td>ssh-fitnesse.dev</td>
          <td>PREFORMATTED</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="4">open connection</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">echo 012345678901234567890123456789</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">
            <pre>012345678901234567890123456789</pre>
          </td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>TERMINAL_WIDTH</td>
          <td>with value</td>
          <td>5</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">echo 012345678901234567890123456789</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2"><pre>01234
56789
01234
56789
01234
56789
</pre>
          </td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>TERMINAL_WIDTH</td>
          <td>with value</td>
          <td>10</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">echo 012345678901234567890123456789</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2"><pre>0123456789
0123456789
0123456789
</pre>
          </td>
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

!***&gt; Definitions
!define output {{'{'}} {{'{'}}{{'{'}}{{'{'}}012345678901234567890123456789}}} }
!define output_5 {{'{'}} {{'{'}}{{'{'}}{{'{'}}01234
56789
01234
56789
01234
56789
}}} }
!define output_10 {{'{'}} {{'{'}}{{'{'}}{{'{'}}0123456789
0123456789
0123456789
}}} }

*!

|script    |ssh client    |ssh-fitnesse.dev|PREFORMATTED|
|open connection                                        |
|execute   |echo 012345678901234567890123456789         |
|check     |output        |{{'$'}}{{'{'}}output}                    |
|add option|TERMINAL_WIDTH|with value      |5           |
|execute   |echo 012345678901234567890123456789         |
|check     |output        |{{'$'}}{{'{'}}output_5}                  |
|add option|TERMINAL_WIDTH|with value      |10          |
|execute   |echo 012345678901234567890123456789         |
|check     |output        |{{'$'}}{{'{'}}output_10}                 |
|close connection                                       |

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
export class TerminalWidthComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'TerminalWidthComponent';
  }


}
