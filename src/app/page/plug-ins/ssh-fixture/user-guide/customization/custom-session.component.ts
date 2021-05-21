import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-custom-session',
  template: `
    <article>
      <h1 id="0">SshFixture custom session</h1>
      Custom session can be implemented to customize ssh sessions.<br><br>
      <h2 id="1">Custom session example</h2>
      In this exemple is defined a custom session implemented with Apache MINA SSHD.<br><br>
      <h3 id="2">Custom session implementation</h3>
      Create the following class, compile it and make it available in the class-path<br><br>
      <pre>package dev.my.custom.processor;

import com.github.gun88.fitnesse.fixture.ssh.endpoint.Endpoint;
import com.github.gun88.fitnesse.fixture.ssh.option.Options;
import com.github.gun88.fitnesse.fixture.ssh.result.ExecutionResult;
import org.apache.sshd.client.SshClient;
import org.apache.sshd.client.channel.ClientChannel;
import org.apache.sshd.client.channel.ClientChannelEvent;
import org.apache.sshd.client.session.ClientSession;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.EnumSet;
import java.util.concurrent.TimeUnit;

public class MinaSession implements SshSession {{'{'}}

        private ClientSession session;
    private SshClient client;

    @Override
    public void open(Endpoint endpoint, Options options) throws IOException {{'{'}}
        client = SshClient.setUpDefaultClient();
        client.start();
        session = client.connect(endpoint.getUsername(), endpoint.getHost(), endpoint.getPort())
                .verify(options.getConnectionTimeout(), TimeUnit.MILLISECONDS)
                .getSession();
        session.addPasswordIdentity(endpoint.getPassword());
        session.auth().verify(options.getConnectionTimeout(), TimeUnit.MILLISECONDS);
    }

    @Override
    public void close() throws IOException {{'{'}}
        session.close();
        client.stop();
    }

    @Override
    public ExecutionResult execute(String command) throws IOException {{'{'}}
        ExecutionResult executionResult = new ExecutionResult();
        try (ByteArrayOutputStream responseStream = new ByteArrayOutputStream();
             ByteArrayOutputStream errorStream = new ByteArrayOutputStream();
             ClientChannel channel = session.createExecChannel(command)) {{'{'}}
        channel.setOut(responseStream);
    channel.setErr(errorStream);
    try {{'{'}}
        channel.open().verify(2, TimeUnit.SECONDS);
                channel.waitFor(EnumSet.of(ClientChannelEvent.CLOSED), TimeUnit.SECONDS.toMillis(3));
                executionResult.setOutput(new String(responseStream.toByteArray()));
                executionResult.setError(new String(errorStream.toByteArray()));
                executionResult.setExitCode(channel.getExitStatus());
            } finally {{'{'}}
        channel.close(false);
            }
        }
        return executionResult;
    }

    @Override
    public ExecutionResult download(String source, String destination) throws IOException {{'{'}}
        throw new RuntimeException("Not implemented");
    }

    @Override
    public ExecutionResult upload(String source, String destination) throws IOException {{'{'}}
        throw new RuntimeException("Not implemented");
    }
}
</pre>
      <br><br>
      <h3 id="3">Create test</h3>
      In this test results are same as default but, under the hood, the implementation is Apache MINA SSHD. The class-name
      for the custom session must be defined via the SESSION_CLASS option.<br><br>
      <table>
        <tbody>
        <tr>
          <td>import</td>
        </tr>
        <tr>
          <td>com.github.gun88.fitnesse.fixture.ssh</td>
        </tr>
        </tbody>
      </table>
      <br>
      <table>
        <tbody>
        <tr>
          <td>script</td>
          <td>ssh client</td>
          <td colspan="2">foo/bar@ssh-fitnesse.dev</td>
        </tr>
        <tr>
          <td>add option</td>
          <td>CONNECTION_TIMEOUT</td>
          <td>with value</td>
          <td>3000</td>
        </tr>
        <tr>
          <td>add option</td>
          <td>SESSION_CLASS</td>
          <td>with value</td>
          <td>com.github.gun88.fitnesse.fixture.ssh.session.MinaSession</td>
        </tr>
        <tr>
          <td colspan="4">open connection</td>
        </tr>
        <tr>
          <td>execute</td>
          <td colspan="3">echo foo; echo bar &gt;&amp;2; exit 234</td>
        </tr>
        <tr>
          <td>check</td>
          <td>output</td>
          <td colspan="2">foo</td>
        </tr>
        <tr>
          <td>check</td>
          <td>error</td>
          <td colspan="2">bar</td>
        </tr>
        <tr>
          <td>check</td>
          <td>exit code</td>
          <td colspan="2">234</td>
        </tr>
        <tr>
          <td colspan="4">close connection</td>
        </tr>
        </tbody>
      </table>
      <br>Note: remember to add compiled code to classpath<br><br>
      <div class="collapsible closed">
        <ul>
          <li><a href="#" class="expandall">Expand</a></li>
          <li><a href="#" class="collapseall">Collapse</a></li>
        </ul>
        <p class="title">code</p>
        <div><pre>|import                               |
|com.github.gun88.fitnesse.fixture.ssh|

|script    |ssh client        |foo/bar@ssh-fitnesse.dev                                            |
|add option|CONNECTION_TIMEOUT|with value|3000                                                     |
|add option|SESSION_CLASS     |with value|com.github.gun88.fitnesse.fixture.ssh.session.MinaSession|
|open connection                                                                                   |
|execute   |echo foo; echo bar &gt;&amp;2; exit 234                                                       |
|check     |output            |foo                                                                 |
|check     |error             |bar                                                                 |
|check     |exit code         |234                                                                 |
|close connection                                                                                  |

!define TEST_SYSTEM {{'{'}}slim}
!path {{'$'}}{{'{'}}jsch.jar.path}
!path {{'$'}}{{'{'}}sshFixture.jar.path}
!path /path/to/your/code/containing/customized/output/processor
</pre>
          <br>Note: if SshFixture is not installed as a plugin, remember to set or replace properties: jsch.jar.path,
          sshFixture.jar.path; with actual paths.<br><br>Note: In this example the connection was built via username and
          password, that are set in plain text in table header. Click <a
            href="PlugIns.SshFixture.UserGuide.EndpointDefinition">here</a> to view different authentication and credential
          storing methods.<br>
        </div>
      </div>
    </article>
  `,
  styles: ['']
})
export class CustomSessionComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'CustomSessionComponent';
  }


}
