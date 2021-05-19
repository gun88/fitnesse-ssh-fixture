package com.github.gun88.fitnesse.fixture.ssh.session;

import com.github.gun88.fitnesse.fixture.ssh.endpoint.Endpoint;
import com.github.gun88.fitnesse.fixture.ssh.option.Options;
import com.github.gun88.fitnesse.fixture.ssh.result.ExecutionResult;
import org.junit.After;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;
import util.EndpointUtils;

import java.io.File;
import java.io.IOException;
import java.io.StringWriter;
import java.nio.file.Files;
import java.util.Collections;

import static org.junit.Assert.*;

public class DummySessionTest {

    private static final Endpoint ENDPOINT = EndpointUtils.of("foo/bar@zoo:123");
    private static final Options OPTIONS = new Options();
    private final DummySession dummySession = new DummySession();
    @Rule
    public TemporaryFolder temporaryFolder = new TemporaryFolder();

    @Before
    public void setUp() {
        dummySession.streams.clear();
        OPTIONS.reset();
        try {
            dummySession.open(ENDPOINT, OPTIONS);
        } catch (IOException ignored) {
        }
    }

    @After
    public void tearDown() {
        try {
            dummySession.close();
        } catch (IOException ignored) {
        }
    }

    @Test
    public void shouldThrowException_whenAlreadyOpened() {
        IOException ioException = assertThrows(IOException.class, () -> dummySession.open(ENDPOINT, OPTIONS));
        assertEquals("Connection already opened", ioException.getMessage());
    }

    @Test
    public void shouldThrowException_whenAlreadyClosed() throws IOException {
        dummySession.close();
        IOException ioException = assertThrows(IOException.class, dummySession::close);
        assertEquals("Connection already closed", ioException.getMessage());
    }

    @Test
    public void shouldThrowException_whenClosed() throws IOException {
        dummySession.close();
        IOException ioException = assertThrows(IOException.class, () -> dummySession.execute("echo 1"));
        assertEquals("Connection closed", ioException.getMessage());
    }

    @Test
    public void shouldThrowException_whenNotOpened() throws IOException {
        ExecutionResult result = dummySession.execute("unknown-command");
        assertEquals("", result.getOutput());
        assertEquals("Command 'unknown-command' not found", result.getError());
        assertEquals(127, result.getExitCode());
    }

    @Test
    public void shouldEchoParameters_whenEchoCalled() throws IOException {
        ExecutionResult result = dummySession.execute("echo foobar");
        assertEquals("foobar", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());
    }

    @Test
    public void shouldRedirectStream_whenOptionProvided() throws IOException {
        ExecutionResult result = dummySession.execute("echo foobar >&2");
        assertEquals("", result.getOutput());
        assertEquals("foobar", result.getError());
        assertEquals(0, result.getExitCode());
    }

    @Test
    public void shouldRedirectStreamToVirtualFile_whenOptionProvided() throws IOException {
        ExecutionResult result = dummySession.execute("echo foobar >my-file.txt");
        assertEquals("", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());
        assertEquals("foobar\n", dummySession.streams.get("my-file.txt").toString());


        result = dummySession.execute("echo foobar >");
        assertEquals("", result.getOutput());
        assertEquals("syntax error", result.getError());
        assertEquals(1, result.getExitCode());
    }

    @Test
    public void shouldExecuteExit_whenCalled() throws IOException {
        ExecutionResult result = dummySession.execute("exit foobar");
        assertEquals("", result.getOutput());
        assertEquals("can not parse: foobar", result.getError());
        assertEquals(1, result.getExitCode());
        result = dummySession.execute("exit 1 2 3");
        assertEquals("", result.getOutput());
        assertEquals("too many arguments", result.getError());
        assertEquals(1, result.getExitCode());
        result = dummySession.execute("exit 123");
        assertEquals("", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(123, result.getExitCode());
    }

    @Test
    public void shouldExecuteEcho_whenCalled() throws IOException {
        ExecutionResult result = dummySession.execute("echo foo bar");
        assertEquals("foo bar", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());
        result = dummySession.execute("echo -e foo\\rbar");
        assertEquals("foo\rbar", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());
    }

    @Test
    public void shouldDumpEndpoint_whenCalled() throws IOException {
        ExecutionResult result = dummySession.execute("dump-endpoint");
        assertEquals("foo/bar@zoo:123", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());
        result = dummySession.execute("dump-endpoint username");
        assertEquals("foo", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());
        result = dummySession.execute("dump-endpoint password");
        assertEquals("bar", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());
        result = dummySession.execute("dump-endpoint host");
        assertEquals("zoo", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());
        result = dummySession.execute("dump-endpoint port");
        assertEquals("123", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());
        result = dummySession.execute("dump-endpoint invalid");
        assertEquals("unknown part: invalid", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());
    }

    @Test
    public void shouldDumpOptions_whenCalled() throws IOException {
        ExecutionResult result = dummySession.execute("dump-options");
        assertEquals("", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());
        OPTIONS.add("MY_OPTION_1", "my-value-1");
        OPTIONS.add("MY_OPTION_2", "my-value2");
        result = dummySession.execute("dump-options MY_OPTION_1");
        assertEquals("MY_OPTION_1=my-value-1", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());
        result = dummySession.execute("dump-options");
        assertEquals("MY_OPTION_1=my-value-1 MY_OPTION_2=my-value2", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());

    }

    @Test
    public void shouldExecuteCat_whenCalled() throws IOException {
        StringWriter stringWriter = new StringWriter();
        stringWriter.append("foobar");
        dummySession.streams.put("my-file.txt", stringWriter);
        ExecutionResult result = dummySession.execute("cat my-file.txt");
        assertEquals("foobar", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());
    }

    @Test
    public void shouldExecuteRm_whenCalled() throws IOException {
        StringWriter stringWriter = new StringWriter();
        stringWriter.append("foobar");
        dummySession.streams.put("my-file.txt", stringWriter);
        ExecutionResult result = dummySession.execute("rm my-file.txt");
        assertEquals("", result.getOutput());
        assertEquals("", result.getError());
        assertEquals(0, result.getExitCode());
        assertEquals(2, dummySession.streams.size());
    }

    @Test
    public void shouldUpload_whenCalled() throws IOException {
        File file = temporaryFolder.newFile("my-file");
        Files.write(file.toPath(), Collections.singletonList("foobar"));
        ExecutionResult result = dummySession.upload(file.getAbsolutePath(), "uploaded");
        assertEquals("Uploaded at: uploaded", result.getOutput());
        assertNull(result.getError());
        assertEquals(0, result.getExitCode());
        assertEquals("foobar", dummySession.streams.get("uploaded").toString().trim());
    }

    @Test
    public void shouldDownload_whenCalled() throws IOException {
        StringWriter stringWriter = new StringWriter();
        stringWriter.append("my file content");
        dummySession.streams.put("my-file", stringWriter);
        File file = new File(temporaryFolder.getRoot(), "downloaded");
        ExecutionResult result = dummySession.download("my-file", file.getAbsolutePath());
        assertEquals("Downloaded at: " + file.getPath(), result.getOutput());
        assertNull(result.getError());
        assertEquals(0, result.getExitCode());
        assertEquals("my file content", String.join("\n", Files.readAllLines(file.toPath())));
    }

    @Test
    public void shouldThrowException_whenDownloadCalledOnClosedSession() throws IOException {
        dummySession.close();
        IOException ioException = assertThrows(IOException.class, () -> dummySession.download("foo", "bar"));
        assertEquals("Connection closed", ioException.getMessage());

    }

    @Test
    public void shouldThrowException_whenUploadCalledOnClosedSession() throws IOException {
        dummySession.close();
        IOException ioException = assertThrows(IOException.class, () -> dummySession.upload("foo", "bar"));
        assertEquals("Connection closed", ioException.getMessage());
    }

    @Test
    public void shouldReturnError_whenDownloadCalledOnNotExistentFile() throws IOException {
        ExecutionResult result = dummySession.download("foo", "bar");
        assertNull("", result.getOutput());
        assertEquals("No such file", result.getError());
        assertEquals(1, result.getExitCode());
    }

    @Test
    public void shouldReturnError_whenUploadCalledOnNotExistentFile() throws IOException {
        ExecutionResult result = dummySession.upload("foo", "bar");
        assertNull("", result.getOutput());
        assertEquals("No such file", result.getError());
        assertEquals(1, result.getExitCode());
    }

}
