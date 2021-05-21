import {Component} from '@angular/core';
import {BaseTestPage} from '../../../../common/base-test-page';
import {PageService} from '../../../../../service/page.service';

@Component({
  selector: 'app-custom-output-processor',
  template: `
    <article>
      <h1 id="0">SshFixture custom output processor</h1>
      Custom output processor can be implemented to customize or enrich output processing. Is suggested to extend the
      default output processor to maintain default behaviours.<br><br>
      <h2 id="1">Custom output processor example</h2>
      In this example a custom output processor (extending the default one) is defined to implement a grep-like operation.
      This grep match on a string provided via <a href="PlugIns.SshFixture.UserGuide.Customization.CustomOptions">CustomOptions</a>.<br><br>
      <h3 id="2">Custom output processor implementation</h3>
      Create the following class, compile it and make it available in the class-path<br><br>
      <pre>package dev.my.custom.processor;

import com.github.gun88.fitnesse.fixture.ssh.option.Option;
import com.github.gun88.fitnesse.fixture.ssh.option.Options;
import com.github.gun88.fitnesse.fixture.ssh.result.ExecutionResult;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class GrepOutputProcessor extends DefaultOutputProcessor {{'{'}}

        @Override
    public void after(ExecutionResult result, Options options) {{'{'}}
        List&lt;String&gt; greps = options.getOtherOptions().stream()
                .filter(x -&gt; x.getKey().equals("GREP"))
                .map(Option::getValue)
                .collect(Collectors.toList());
        result.setOutput(grep(result.getOutput(), greps));
        result.setError(grep(result.getError(), greps));
    }

    private String grep(String output, List&lt;String&gt; greps) {{'{'}}
        for (String grep : greps)
            output = Arrays.stream(grep.split("\\n"))
                    .filter(x -&gt; x.contains(grep))
                    .collect(Collectors.joining("\\n"));
        return output;
    }

}
</pre>
      <br><br>
      <h3 id="3">Create test</h3>
      Only output matching greps (containing foo and bar) will be returned. The class-name for the custom output processor
      must be defined via the OUTPUT_PROCESSOR_CLASS option.<br><br>
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
          <td>OUTPUT_PROCESSOR_CLASS</td>
          <td>with value</td>
          <td>dev.my.custom.processor.GrepOutputProcessor</td>
        </tr>
        <tr>
          <td>add option</td>
          <td>GREP</td>
          <td>with value</td>
          <td>foo</td>
        </tr>
        <tr>
          <td>add option</td>
          <td>GREP</td>
          <td>with value</td>
          <td>bar</td>
        </tr>
        <tr>
          <td colspan="4">open connection</td>
        </tr>
        <tr>
          <td>execute</td>
          <td colspan="3">echo foobar</td>
        </tr>
        <tr>
          <td>check</td>
          <td>output</td>
          <td colspan="2">foobar</td>
        </tr>
        <tr>
          <td>execute</td>
          <td colspan="3">echo foo_bar</td>
        </tr>
        <tr>
          <td>check</td>
          <td>output</td>
          <td colspan="2">foo_bar</td>
        </tr>
        <tr>
          <td>execute</td>
          <td colspan="3">echo foo_bar</td>
        </tr>
        <tr>
          <td>check</td>
          <td>output</td>
          <td colspan="2">foo_bar</td>
        </tr>
        <tr>
          <td>execute</td>
          <td colspan="3">echo fo_ar</td>
        </tr>
        <tr>
          <td>check</td>
          <td>output</td>
          <td colspan="2"></td>
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

|script    |ssh client            |foo/bar@ssh-fitnesse.dev                              |
|add option|OUTPUT_PROCESSOR_CLASS|with value|dev.my.custom.processor.GrepOutputProcessor|
|add option|GREP                  |with value|foo                                        |
|add option|GREP                  |with value|bar                                        |
|open connection                                                                         |
|execute   |echo foobar                                                                  |
|check     |output                |foobar                                                |
|execute   |echo foo_bar                                                                 |
|check     |output                |foo_bar                                               |
|execute   |echo foo_bar                                                                 |
|check     |output                |foo_bar                                               |
|execute   |echo fo_ar                                                                   |
|check     |output                |                                                      |
|close connection                                                                        |

!define TEST_SYSTEM {{'{'}}slim}
!path {{'{'}}{{'{'}}'$'}}{{'{'}}jsch.jar.path}
!path {{'{'}}{{'{'}}'$'}}{{'{'}}sshFixture.jar.path}
!path /path/to/your/code/containing/customized/output/processor
</pre>
          <br>Note: if SshFixture is not installed as a plugin, remember to set or replace properties: jsch.jar.path,
          sshFixture.jar.path; with actual paths.<br><br>Note: In this example the connection was built via username and
          password, that are set in plain text in table header. Click <a
            href="PlugIns.SshFixture.UserGuide.EndpointDefinition">here</a> to view different authentication and credential
          storing methods.<br></div>
      </div>
    </article>`,
  styles: ['']
})
export class CustomOutputProcessorComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'CustomOutputProcessorComponent';
  }


}
