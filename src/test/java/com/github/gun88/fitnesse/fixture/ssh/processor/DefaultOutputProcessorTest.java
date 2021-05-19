package com.github.gun88.fitnesse.fixture.ssh.processor;

import com.github.gun88.fitnesse.fixture.ssh.option.Options;
import com.github.gun88.fitnesse.fixture.ssh.result.ExecutionResult;
import fitnesse.html.HtmlUtil;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

public class DefaultOutputProcessorTest {

    private final OutputProcessor outputProcessor = new DefaultOutputProcessor();

    @Test
    public void shouldReturnNull_whenNullStringProvided() {
        ExecutionResult result = new ExecutionResult();
        outputProcessor.after(result, new Options());
        assertNull(result.getOutput());
        assertNull(result.getError());
        assertEquals(0, result.getExitCode());
    }

    @Test
    public void shouldReplaceExpressions_whenReplaceExpressionsProvided() {
        ExecutionResult result = new ExecutionResult();
        result.setOutput("foo");
        result.setError("zoo");
        Options options = new Options();
        options.add("REPLACE", "/foo/bar/");
        options.add("REPLACE", "/bar/123_1_2_3/");
        options.add("REPLACE", "/\\d+/x/");
        outputProcessor.after(result, options);
        assertEquals("x_x_x_x", result.getOutput());
        assertEquals("zoo", result.getError());
        assertEquals(0, result.getExitCode());
    }

    @Test
    public void shouldIgnoreCarriageReturn_whenIgnoreCarriageReturnOptionEnabled() {
        ExecutionResult result = new ExecutionResult();
        result.setOutput("foo\rbar");
        Options options = new Options();
        options.add("IGNORE_CARRIAGE_RETURN");
        outputProcessor.after(result, options);
        assertEquals("foo\rbar", result.getOutput());
        options.reset("IGNORE_CARRIAGE_RETURN");
        outputProcessor.after(result, options);
        assertEquals("bar", result.getOutput());
    }

    @Test
    public void shouldTruncateToTerminalWidth_whenTerminalWidthProvided() {
        ExecutionResult result = new ExecutionResult();
        result.setOutput("0123456789");
        Options options = new Options();
        options.add("TERMINAL_WIDTH", "5");
        outputProcessor.after(result, options);
        assertEquals("01234" + HtmlUtil.BR.html() + "56789" + HtmlUtil.BR.html(), result.getOutput());
        result.setOutput("0123456789");
        options.add("PREFORMATTED");
        outputProcessor.after(result, options);
        assertEquals("<pre>01234\n56789\n</pre>", result.getOutput());
    }

    @Test
    public void shouldWrapPreformatted_whenPreformattedOptionEnabled() {
        ExecutionResult result = new ExecutionResult();
        result.setOutput("foobar");
        Options options = new Options();
        options.add("PREFORMATTED");
        outputProcessor.after(result, options);
        assertEquals("<pre>foobar</pre>", result.getOutput());
    }

    @Test
    public void shouldReturnSameOutput_whenNoOptionsProvided() {
        ExecutionResult result = new ExecutionResult();
        result.setOutput("foo");
        result.setError("bar");
        result.setExitCode(123);
        Options options = new Options();
        outputProcessor.after(result, options);
        assertEquals("foo", result.getOutput());
        assertEquals("bar", result.getError());
        assertEquals(123, result.getExitCode());
    }
}
