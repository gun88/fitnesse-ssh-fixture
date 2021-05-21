import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-password-authentication',
  template: `
    <article>
      <br>
      <h1 id="0">SshFixture password authentication</h1>
      Password authentication is the simplest way to connect to ssh endpoints.<br><br>
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
      <h2 id="1">Connection string</h2>
      The only mandatory parameter is: host. If port is omitted, the default value (22) will be evaluated. SshFixture connection string has
      the following format:<br><br>
      <pre>[username]/[password]@[host]:[port]</pre>
      <br><br>
      <h3 id="2">Connection string parts dump</h3>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td colspan="3">ssh client</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>SESSION_CLASS</td>
          <td>with value</td>
          <td>com.github.gun88.fitnesse.fixture.ssh.session.DummySession</td>
        </tr>
        </tbody>
      </table>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>scenario</td>
          <td>endpoint dump parts _</td>
          <td>endpoint,username?,password?,host?,port?</td>
        </tr>
        <tr class="slimRowColor5">
          <td>endpoint</td>
          <td colspan="2">@endpoint</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="3">open connection</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">dump-endpoint username</td>
        </tr>
        <tr class="slimRowColor1">
          <td>$username=</td>
          <td colspan="2">output</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">dump-endpoint password</td>
        </tr>
        <tr class="slimRowColor0">
          <td>$password=</td>
          <td colspan="2">output</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">dump-endpoint host</td>
        </tr>
        <tr class="slimRowColor3">
          <td>$host=</td>
          <td colspan="2">output</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">dump-endpoint port</td>
        </tr>
        <tr class="slimRowColor0">
          <td>$port=</td>
          <td colspan="2">output</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="3">close connection</td>
        </tr>
        </tbody>
      </table>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td colspan="5">endpoint dump parts</td>
        </tr>
        <tr class="slimRowTitle">
          <td>endpoint</td>
          <td>username?</td>
          <td>password?</td>
          <td>host?</td>
          <td>port?</td>
        </tr>
        <tr class="slimRowColor1">
          <td>127.0.0.1</td>
          <td>null</td>
          <td>null</td>
          <td>127.0.0.1</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>127.0.0.1:2222</td>
          <td>null</td>
          <td>null</td>
          <td>127.0.0.1</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>@127.0.0.1</td>
          <td></td>
          <td>null</td>
          <td>127.0.0.1</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>@127.0.0.1:2222</td>
          <td></td>
          <td>null</td>
          <td>127.0.0.1</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>/@127.0.0.1</td>
          <td></td>
          <td></td>
          <td>127.0.0.1</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>/@127.0.0.1:2222</td>
          <td></td>
          <td></td>
          <td>127.0.0.1</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>/bar@127.0.0.1</td>
          <td></td>
          <td>bar</td>
          <td>127.0.0.1</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>/bar@127.0.0.1:2222</td>
          <td></td>
          <td>bar</td>
          <td>127.0.0.1</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>/!\\"£$%&amp;/() = @127.0.0.1</td>
          <td></td>
          <td>!\\"£$%&amp;/() =</td>
          <td>127.0.0.1</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>/!\\"£$%&amp;/() = @127.0.0.1:2222</td>
          <td></td>
          <td>!\\"£$%&amp;/() =</td>
          <td>127.0.0.1</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>foo@127.0.0.1</td>
          <td>foo</td>
          <td>null</td>
          <td>127.0.0.1</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>foo@127.0.0.1:2222</td>
          <td>foo</td>
          <td>null</td>
          <td>127.0.0.1</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>foo/@127.0.0.1</td>
          <td>foo</td>
          <td></td>
          <td>127.0.0.1</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>foo/@127.0.0.1:2222</td>
          <td>foo</td>
          <td></td>
          <td>127.0.0.1</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>foo/bar@127.0.0.1</td>
          <td>foo</td>
          <td>bar</td>
          <td>127.0.0.1</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>foo/bar@127.0.0.1:2222</td>
          <td>foo</td>
          <td>bar</td>
          <td>127.0.0.1</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>foo/!\\"£$%&amp;/() = @127.0.0.1</td>
          <td>foo</td>
          <td>!\\"£$%&amp;/() =</td>
          <td>127.0.0.1</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>foo/!\\"£$%&amp;/() = @127.0.0.1:2222</td>
          <td>foo</td>
          <td>!\\"£$%&amp;/() =</td>
          <td>127.0.0.1</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>my-host</td>
          <td>null</td>
          <td>null</td>
          <td>my-host</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>my-host:2222</td>
          <td>null</td>
          <td>null</td>
          <td>my-host</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>@my-host</td>
          <td></td>
          <td>null</td>
          <td>my-host</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>@my-host:2222</td>
          <td></td>
          <td>null</td>
          <td>my-host</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>/@my-host</td>
          <td></td>
          <td></td>
          <td>my-host</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>/@my-host:2222</td>
          <td></td>
          <td></td>
          <td>my-host</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>/bar@my-host</td>
          <td></td>
          <td>bar</td>
          <td>my-host</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>/bar@my-host:2222</td>
          <td></td>
          <td>bar</td>
          <td>my-host</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>/!\\"£$%&amp;/() = @my-host</td>
          <td></td>
          <td>!\\"£$%&amp;/() =</td>
          <td>my-host</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>/!\\"£$%&amp;/() = @my-host:2222</td>
          <td></td>
          <td>!\\"£$%&amp;/() =</td>
          <td>my-host</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>foo@my-host</td>
          <td>foo</td>
          <td>null</td>
          <td>my-host</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>foo@my-host:2222</td>
          <td>foo</td>
          <td>null</td>
          <td>my-host</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>foo/@my-host</td>
          <td>foo</td>
          <td></td>
          <td>my-host</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>foo/@my-host:2222</td>
          <td>foo</td>
          <td></td>
          <td>my-host</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>foo/bar@my-host</td>
          <td>foo</td>
          <td>bar</td>
          <td>my-host</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>foo/bar@my-host:2222</td>
          <td>foo</td>
          <td>bar</td>
          <td>my-host</td>
          <td>2222</td>
        </tr>
        <tr class="slimRowColor1">
          <td>foo/!\\"£$%&amp;/() = @my-host</td>
          <td>foo</td>
          <td>!\\"£$%&amp;/() =</td>
          <td>my-host</td>
          <td>22</td>
        </tr>
        <tr class="slimRowColor0">
          <td>foo/!\\"£$%&amp;/() = @my-host:2222</td>
          <td>foo</td>
          <td>!\\"£$%&amp;/() =</td>
          <td>my-host</td>
          <td>2222</td>
        </tr>
        </tbody>
      </table>
      <br>
      <h3 id="3">Where can be used</h3>
      Connection string can be used in:<br><h4 id="4">Decision table header</h4>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>ssh client</td>
          <td>foo/bar@ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowTitle">
          <td>command</td>
          <td>output?</td>
        </tr>
        <tr class="slimRowColor1">
          <td>echo 123</td>
          <td>123</td>
        </tr>
        </tbody>
      </table>
      <br><h4 id="5">Script table header</h4>
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
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">echo 123</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>123</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="3">close connection</td>
        </tr>
        </tbody>
      </table>
      <br><h4 id="6">Script table body</h4>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td colspan="2">ssh client</td>
        </tr>
        <tr class="slimRowColor5">
          <td>endpoint</td>
          <td colspan="2">foo/bar@ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="3">open connection</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">echo 123</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>123</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="3">close connection</td>
        </tr>
        </tbody>
      </table>
      <br><h4 id="7">Defaults</h4>
      Connection string can be used to set default endpoint in <a
      href="PlugIns.SshFixture.UserGuide.EndpointDefinition.VmOptions">VmOptions</a> and <a
      href="PlugIns.SshFixture.UserGuide.EndpointDefinition.PropertiesFile">PropertiesFile</a><br><br>
      <div class="collapsible closed">
        <ul>
          <li><a href="#" class="expandall">Expand</a></li>
          <li><a href="#" class="collapseall">Collapse</a></li>
        </ul>
        <p class="title">code</p>
        <div><pre>|import                               |
|com.github.gun88.fitnesse.fixture.ssh|

|script    |ssh client                                                                         |
|add option|SESSION_CLASS|with value|com.github.gun88.fitnesse.fixture.ssh.session.DummySession|

|scenario  |endpoint dump parts _|endpoint,username?,password?,host?,port?|
|endpoint  |@endpoint                                                     |
|open connection                                                          |
|execute   |dump-endpoint username                                        |
|$username=|output                                                        |
|execute   |dump-endpoint password                                        |
|$password=|output                                                        |
|execute   |dump-endpoint host                                            |
|$host=    |output                                                        |
|execute   |dump-endpoint port                                            |
|$port=    |output                                                        |
|close connection                                                         |

|endpoint dump parts                                                           |
|endpoint                         |username?|password?         |host?    |port?|
|127.0.0.1                        |null     |null              |127.0.0.1|22   |
|127.0.0.1:2222                   |null     |null              |127.0.0.1|2222 |
|@127.0.0.1                       |         |null              |127.0.0.1|22   |
|@127.0.0.1:2222                  |         |null              |127.0.0.1|2222 |
|/@127.0.0.1                      |         |                  |127.0.0.1|22   |
|/@127.0.0.1:2222                 |         |                  |127.0.0.1|2222 |
|/bar@127.0.0.1                   |         |bar               |127.0.0.1|22   |
|/bar@127.0.0.1:2222              |         |bar               |127.0.0.1|2222 |
|/!\\"£$%&amp;/()  = @127.0.0.1        |         |!-!\\"£$%&amp;/()  = -!|127.0.0.1|22   |
|/!\\"£$%&amp;/()  = @127.0.0.1:2222   |         |!-!\\"£$%&amp;/()  = -!|127.0.0.1|2222 |
|foo@127.0.0.1                    |foo      |null              |127.0.0.1|22   |
|foo@127.0.0.1:2222               |foo      |null              |127.0.0.1|2222 |
|foo/@127.0.0.1                   |foo      |                  |127.0.0.1|22   |
|foo/@127.0.0.1:2222              |foo      |                  |127.0.0.1|2222 |
|foo/bar@127.0.0.1                |foo      |bar               |127.0.0.1|22   |
|foo/bar@127.0.0.1:2222           |foo      |bar               |127.0.0.1|2222 |
|foo/!\\"£$%&amp;/()  = @127.0.0.1     |foo      |!-!\\"£$%&amp;/()  = -!|127.0.0.1|22   |
|foo/!\\"£$%&amp;/()  = @127.0.0.1:2222|foo      |!-!\\"£$%&amp;/()  = -!|127.0.0.1|2222 |
|my-host                          |null     |null              |my-host  |22   |
|my-host:2222                     |null     |null              |my-host  |2222 |
|@my-host                         |         |null              |my-host  |22   |
|@my-host:2222                    |         |null              |my-host  |2222 |
|/@my-host                        |         |                  |my-host  |22   |
|/@my-host:2222                   |         |                  |my-host  |2222 |
|/bar@my-host                     |         |bar               |my-host  |22   |
|/bar@my-host:2222                |         |bar               |my-host  |2222 |
|/!\\"£$%&amp;/()  = @my-host          |         |!-!\\"£$%&amp;/()  = -!|my-host  |22   |
|/!\\"£$%&amp;/()  = @my-host:2222     |         |!-!\\"£$%&amp;/()  = -!|my-host  |2222 |
|foo@my-host                      |foo      |null              |my-host  |22   |
|foo@my-host:2222                 |foo      |null              |my-host  |2222 |
|foo/@my-host                     |foo      |                  |my-host  |22   |
|foo/@my-host:2222                |foo      |                  |my-host  |2222 |
|foo/bar@my-host                  |foo      |bar               |my-host  |22   |
|foo/bar@my-host:2222             |foo      |bar               |my-host  |2222 |
|foo/!\\"£$%&amp;/()  = @my-host       |foo      |!-!\\"£$%&amp;/()  = -!|my-host  |22   |
|foo/!\\"£$%&amp;/()  = @my-host:2222  |foo      |!-!\\"£$%&amp;/()  = -!|my-host  |2222 |

|ssh client|foo/bar@ssh-fitnesse.dev|
|command   |output?                 |
|echo 123  |123                     |

|script |ssh client|foo/bar@ssh-fitnesse.dev|
|open connection                            |
|execute|echo 123                           |
|check  |output    |123                     |
|close connection                           |

|script  |ssh client              |
|endpoint|foo/bar@ssh-fitnesse.dev|
|open connection                  |
|execute |echo 123                |
|check   |output|123              |
|close connection                 |

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
      <h2 id="8">Connection string parts</h2>
      Connection string parts can also be set separately in script tables. The only mandatory parameter is: host. If port is omitted, the
      default value (22) will be evaluated. When connection string parts are set separately, the final endpoint can be enriched with <a
      href="PlugIns.SshFixture.UserGuide.EndpointDefinition.KeyPair">KeyPair</a> and <a
      href="PlugIns.SshFixture.UserGuide.EndpointDefinition.KnownHosts">KnownHosts</a>.<br><br>
      <h3 id="9">Connection string dump</h3>
      <br>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td colspan="3">ssh client</td>
        </tr>
        <tr class="slimRowColor4">
          <td>add option</td>
          <td>SESSION_CLASS</td>
          <td>with value</td>
          <td>com.github.gun88.fitnesse.fixture.ssh.session.DummySession</td>
        </tr>
        <tr class="slimRowColor4">
          <td>username</td>
          <td colspan="3">foo</td>
        </tr>
        <tr class="slimRowColor3">
          <td>password</td>
          <td colspan="3">X!\\"£$%&amp;/() =</td>
        </tr>
        <tr class="slimRowColor6">
          <td>host</td>
          <td colspan="3">my-host</td>
        </tr>
        <tr class="slimRowColor3">
          <td>port</td>
          <td colspan="3">2222</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="4">open connection</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">dump-endpoint</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">foo/X!\\"£$%&amp;/() = @my-host:2222</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="4">close connection</td>
        </tr>
        <tr class="slimRowColor4">
          <td colspan="4">reset endpoint</td>
        </tr>
        <tr class="slimRowColor6">
          <td>host</td>
          <td colspan="3">my-host-2</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="4">open connection</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="3">dump-endpoint</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td colspan="2">my-host-2</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="4">close connection</td>
        </tr>
        </tbody>
      </table>
      <br>
      <h3 id="10">Where can be used</h3>
      Connection string can be used in:<br><h4 id="11">Script table</h4>
      <table>
        <tbody>
        <tr class="slimRowTitle">
          <td>script</td>
          <td colspan="2">ssh client</td>
        </tr>
        <tr class="slimRowColor4">
          <td>username</td>
          <td colspan="2">foo</td>
        </tr>
        <tr class="slimRowColor3">
          <td>password</td>
          <td colspan="2">bar</td>
        </tr>
        <tr class="slimRowColor6">
          <td>host</td>
          <td colspan="2">ssh-fitnesse.dev</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="3">open connection</td>
        </tr>
        <tr class="slimRowColor5">
          <td>execute</td>
          <td colspan="2">echo 123</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>123</td>
        </tr>
        <tr class="slimRowColor8">
          <td colspan="3">close connection</td>
        </tr>
        </tbody>
      </table>
      <br><h4 id="12">Scenario table</h4>
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
          <td colspan="2">echo 123</td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>output</td>
          <td>123</td>
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

|script    |ssh client                                                                         |
|add option|SESSION_CLASS|with value|com.github.gun88.fitnesse.fixture.ssh.session.DummySession|
|username  |foo                                                                                |
|password  |!-X!\\"£$%&amp;/()  = -!                                                                |
|host      |my-host                                                                            |
|port      |2222                                                                               |
|open connection                                                                               |
|execute   |dump-endpoint                                                                      |
|check     |output       |!-X!\\"£$%&amp;/()  = -!                                                  |
|close connection                                                                              |
|reset endpoint                                                                                |
|host      |my-host-2                                                                          |
|open connection                                                                               |
|execute   |dump-endpoint                                                                      |
|check     |output       |my-host-2                                                            |
|close connection                                                                              |

|script  |ssh client      |
|username|foo             |
|password|bar             |
|host    |ssh-fitnesse.dev|
|open connection          |
|execute |echo 123        |
|check   |output|123      |
|close connection         |

|scenario|load endpoint   |
|username|foo             |
|password|bar             |
|host    |ssh-fitnesse.dev|

|script |ssh client|
|load endpoint     |
|open connection   |
|execute|echo 123  |
|check  |output|123|
|close connection  |

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
export class PasswordAuthenticationComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'PasswordAuthenticationComponent';
  }


}
