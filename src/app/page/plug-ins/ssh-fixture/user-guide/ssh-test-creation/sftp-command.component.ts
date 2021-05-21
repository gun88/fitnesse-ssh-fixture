import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-sftp-command',
  template: `
    <article>
      <br>
      <h2 id="0">Sftp Command</h2>
      Download and upload command are available in SshFixture.<br><br>
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
      <br>Sftp commands are: download and upload; available in script mode only. In the following example, a file will be created in
      FitNesseRoot, uploaded via sftp on server and checked. Once uploaded and verified, the file will be modified on server and downloaded
      to FitNesseRoot to be finally checked.<br><br>Note: this test could fail if <span class="fitnesse">FitNesse</span> user has not
      permissions to write files in FitNesseRoot directory.<br><br>
      <div class="collapsible closed">
        <ul>
          <li><a href="#" class="expandall">Expand</a></li>
          <li><a href="#" class="collapseall">Collapse</a></li>
        </ul>
        <p class="title">Write 'my demo file' to demo-file-client.txt</p>
        <div>
          <table>
            <tbody>
            <tr class="slimRowTitle">
              <td>script</td>
              <td>java.io.FileWriter</td>
              <td>./demo-file-client.txt</td>
            </tr>
            <tr class="slimRowColor5">
              <td>write</td>
              <td colspan="2">109</td>
            </tr>
            <tr class="slimRowColor5">
              <td>write</td>
              <td colspan="2">121</td>
            </tr>
            <tr class="slimRowColor5">
              <td>write</td>
              <td colspan="2">32</td>
            </tr>
            <tr class="slimRowColor5">
              <td>write</td>
              <td colspan="2">100</td>
            </tr>
            <tr class="slimRowColor5">
              <td>write</td>
              <td colspan="2">101</td>
            </tr>
            <tr class="slimRowColor5">
              <td>write</td>
              <td colspan="2">109</td>
            </tr>
            <tr class="slimRowColor5">
              <td>write</td>
              <td colspan="2">111</td>
            </tr>
            <tr class="slimRowColor5">
              <td>write</td>
              <td colspan="2">32</td>
            </tr>
            <tr class="slimRowColor5">
              <td>write</td>
              <td colspan="2">102</td>
            </tr>
            <tr class="slimRowColor5">
              <td>write</td>
              <td colspan="2">105</td>
            </tr>
            <tr class="slimRowColor5">
              <td>write</td>
              <td colspan="2">108</td>
            </tr>
            <tr class="slimRowColor5">
              <td>write</td>
              <td colspan="2">101</td>
            </tr>
            <tr class="slimRowColor4">
              <td colspan="3">close</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
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
        <tr class="slimRowColor8">
          <td>note</td>
          <td colspan="3">uploading file</td>
        </tr>
        <tr class="slimRowColor5">
          <td>upload</td>
          <td>./demo-file-client.txt</td>
          <td>to</td>
          <td>demo-file-server.txt</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">Uploaded at: demo-file-server.txt</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>exit code</td>
          <td colspan="2">0</td>
        </tr>
        <tr class="slimRowColor8">
          <td>note</td>
          <td colspan="3">check uploaded file</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">cat demo-file-server.txt</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">my demo file</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>exit code</td>
          <td colspan="2">0</td>
        </tr>
        <tr class="slimRowColor8">
          <td>note</td>
          <td colspan="3">editing file on server</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">echo foo-bar &gt;demo-file-server.txt</td>
        </tr>
        <tr class="slimRowColor8">
          <td>note</td>
          <td colspan="3">downloading file</td>
        </tr>
        <tr class="slimRowColor6">
          <td>download</td>
          <td>demo-file-server.txt</td>
          <td>to</td>
          <td>./demo-file-client.txt</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">Downloaded at: ./demo-file-client.txt</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>exit code</td>
          <td colspan="2">0</td>
        </tr>
        <tr class="slimRowColor8">
          <td>note</td>
          <td colspan="3">deleting file on server</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">rm demo-file-server.txt</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>exit code</td>
          <td colspan="2">0</td>
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
        <p class="title">read 'my demo file' to demo-file-client.txt</p>
        <div>
          <table>
            <tbody>
            <tr class="slimRowTitle">
              <td>script</td>
              <td>java.io.FileReader</td>
              <td>./demo-file-client.txt</td>
            </tr>
            <tr class="slimRowColor0">
              <td>check</td>
              <td>read</td>
              <td>102</td>
            </tr>
            <tr class="slimRowColor0">
              <td>check</td>
              <td>read</td>
              <td>111</td>
            </tr>
            <tr class="slimRowColor0">
              <td>check</td>
              <td>read</td>
              <td>111</td>
            </tr>
            <tr class="slimRowColor0">
              <td>check</td>
              <td>read</td>
              <td>45</td>
            </tr>
            <tr class="slimRowColor0">
              <td>check</td>
              <td>read</td>
              <td>98</td>
            </tr>
            <tr class="slimRowColor0">
              <td>check</td>
              <td>read</td>
              <td>97</td>
            </tr>
            <tr class="slimRowColor0">
              <td>check</td>
              <td>read</td>
              <td>114</td>
            </tr>
            <tr class="slimRowColor0">
              <td>check</td>
              <td>read</td>
              <td>10</td>
            </tr>
            <tr class="slimRowColor0">
              <td>check</td>
              <td>read</td>
              <td>-1</td>
            </tr>
            <tr class="slimRowColor4">
              <td colspan="3">close</td>
            </tr>
            </tbody>
          </table>
          <br>
          <table>
            <tbody>
            <tr class="slimRowTitle">
              <td>script</td>
              <td>java.io.File</td>
              <td>./demo-file-client.txt</td>
            </tr>
            <tr class="slimRowColor7">
              <td colspan="3">delete</td>
            </tr>
            <tr class="slimRowColor0">
              <td>check</td>
              <td>exists</td>
              <td>false</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br>
      <div class="collapsible closed">
        <ul>
          <li><a href="#" class="expandall">Expand</a></li>
          <li><a href="#" class="collapseall">Collapse</a></li>
        </ul>
        <p class="title">code</p>
        <div><pre>|import                               |
|com.github.gun88.fitnesse.fixture.ssh|

|script  |ssh client                               |foo/bar@ssh-fitnesse.dev                                |
|open connection                                                                                            |
|note    |uploading file                                                                                    |
|upload  |{{'$'}}{{'{'}}FITNESSE_ROOTPATH}/demo-file-client.txt|to|demo-file-server.txt                                 |
|check   |output                                   |Uploaded at: demo-file-server.txt                       |
|check   |exit code                                |0                                                       |
|note    |check uploaded file                                                                               |
|execute |cat demo-file-server.txt                                                                          |
|check   |output                                   |my demo file                                            |
|check   |exit code                                |0                                                       |
|note    |editing file on server                                                                            |
|execute |echo foo-bar &gt;demo-file-server.txt                                                                |
|note    |downloading file                                                                                  |
|download|demo-file-server.txt                     |to|{{'$'}}{{'{'}}FITNESSE_ROOTPATH}/demo-file-client.txt            |
|check   |output                                   |Downloaded at: {{'$'}}{{'{'}}FITNESSE_ROOTPATH}/demo-file-client.txt|
|check   |exit code                                |0                                                       |
|note    |deleting file on server                                                                           |
|execute |rm demo-file-server.txt                                                                           |
|check   |exit code                                |0                                                       |
|close connection                                                                                           |

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
export class SftpCommandComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'SftpCommandComponent';
  }


}
