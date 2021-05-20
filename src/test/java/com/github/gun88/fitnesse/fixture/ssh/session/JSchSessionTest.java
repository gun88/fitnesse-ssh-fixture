package com.github.gun88.fitnesse.fixture.ssh.session;

import com.github.gun88.fitnesse.fixture.ssh.endpoint.Endpoint;
import com.github.gun88.fitnesse.fixture.ssh.option.Options;
import com.github.gun88.fitnesse.fixture.ssh.result.ExecutionResult;
import com.jcraft.jsch.*;
import org.junit.Before;
import org.junit.Test;
import util.EndpointUtils;
import util.StreamUtils;

import java.io.IOException;
import java.io.InputStream;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
import static org.mockito.Mockito.*;

public class JSchSessionTest {

    private static final Endpoint ENDPOINT = EndpointUtils.of("foo/bar@zoo:123");
    private static final Options OPTIONS = new Options();
    private final JSchSession jSchSession = new JSchSession();
    private final JSch jsch = mock(JSch.class);
    private final Session session = mock(Session.class);


    @Before
    public void setUp() throws Exception {
        jSchSession.jSch = jsch;
        reset(jsch);
        OPTIONS.reset();
        when(jsch.getSession(ENDPOINT.getUsername(), ENDPOINT.getHost(), ENDPOINT.getPort())).thenReturn(session);

    }

    @Test
    public void open_shouldSetNoStrictHostKeyChecking_whenKnownHostsNotSetInOptions() throws IOException, JSchException {
        jSchSession.open(ENDPOINT, OPTIONS);
        verify(session, times(1)).setConfig("StrictHostKeyChecking", "no");
        verify(jsch, never()).setKnownHosts(any(InputStream.class));
        verify(session, times(1)).connect(OPTIONS.getConnectionTimeout());
    }

    @Test
    public void open_shouldSetKnownHosts_whenKnownHostsNotSetInOptions() throws IOException, JSchException {
        OPTIONS.add("KNOWN_HOSTS", "foo");
        jSchSession.open(ENDPOINT, OPTIONS);
        verify(session, never()).setConfig("StrictHostKeyChecking", "no");
        verify(jsch, times(1)).setKnownHosts(any(InputStream.class));
        verify(session, times(1)).connect(OPTIONS.getConnectionTimeout());

    }

    @Test
    public void open_shouldUsePasswordAuthentication_whenPrivateKeyOptionNotProvided() throws IOException, JSchException {
        jSchSession.open(ENDPOINT, OPTIONS);
        verify(session, times(1)).setPassword(ENDPOINT.getPassword());
        verify(jsch, never()).addIdentity(anyString(), any(byte[].class), any(byte[].class), any(byte[].class));
        verify(session, times(1)).connect(OPTIONS.getConnectionTimeout());
    }

    @Test
    public void open_shouldUseKeyPairAuthentication_whenPrivateKeyOptionProvided() throws IOException, JSchException {
        OPTIONS.add("PRIVATE_KEY", "x");
        jSchSession.open(ENDPOINT, OPTIONS);
        verify(session, never()).setPassword(ENDPOINT.getPassword());
        verify(jsch, times(1)).addIdentity(anyString(), eq("x".getBytes()), eq(null), eq(null));
        verify(session, times(1)).connect(OPTIONS.getConnectionTimeout());
    }

    @Test(expected = IOException.class)
    public void open_shouldThrowIoException_whenJschExceptionThrown() throws IOException, JSchException {
        when(jsch.getSession(ENDPOINT.getUsername(), ENDPOINT.getHost(), ENDPOINT.getPort())).thenThrow(JSchException.class);
        jSchSession.open(ENDPOINT, OPTIONS);
    }

    @Test
    public void close_shouldDisconnectSession_whenCalled() throws IOException {
        jSchSession.open(ENDPOINT, OPTIONS);
        jSchSession.close();
        verify(session, times(1)).disconnect();

    }

    @Test
    public void execute_shouldReturnExecutionResult_whenNoExceptionThrown() throws IOException, JSchException {
        jSchSession.open(ENDPOINT, OPTIONS);
        ChannelExec channelExec = mock(ChannelExec.class);
        when(channelExec.getInputStream()).thenReturn(StreamUtils.stringToInputStream("my output"));
        when(channelExec.getErrStream()).thenReturn(StreamUtils.stringToInputStream("my error"));
        when(channelExec.getExitStatus()).thenReturn(123);
        when(session.openChannel("exec")).thenReturn(channelExec);
        ExecutionResult executionResult = jSchSession.execute("my command");
        assertEquals("my output", executionResult.getOutput());
        assertEquals("my error", executionResult.getError());
        assertEquals(123, executionResult.getExitCode());

        verify(channelExec, times(1)).connect(OPTIONS.getConnectionTimeout());
        verify(channelExec, times(1)).disconnect();

    }

    @Test(expected = IOException.class)
    public void execute_shouldThrowIoException_whenJschExceptionThrown() throws IOException, JSchException {
        jSchSession.open(ENDPOINT, OPTIONS);
        when(session.openChannel("exec")).thenThrow(JSchException.class);
        jSchSession.execute("my command");

    }

    @Test
    public void download_shouldReturnExecutionResult_whenNoExceptionThrown() throws IOException, JSchException, SftpException {
        jSchSession.open(ENDPOINT, OPTIONS);
        ChannelSftp channelSftp = mock(ChannelSftp.class);
        when(session.openChannel("sftp")).thenReturn(channelSftp);
        ExecutionResult executionResult = jSchSession.download("src", "dest");
        assertEquals("Downloaded at: dest", executionResult.getOutput());
        assertNull(executionResult.getError());
        assertEquals(0, executionResult.getExitCode());

        verify(channelSftp, times(1)).connect(OPTIONS.getConnectionTimeout());
        verify(channelSftp, times(1)).get("src", "dest");
        verify(channelSftp, times(1)).disconnect();

    }

    @Test
    public void download_shouldReturnExecutionResult_whenSftpExceptionThrown() throws IOException, JSchException, SftpException {
        jSchSession.open(ENDPOINT, OPTIONS);
        ChannelSftp channelSftp = mock(ChannelSftp.class);
        doThrow(new SftpException(0, "my-message")).when(channelSftp).get("src", "dest");
        when(session.openChannel("sftp")).thenReturn(channelSftp);
        ExecutionResult executionResult = jSchSession.download("src", "dest");
        assertNull(executionResult.getOutput());
        assertEquals("my-message", executionResult.getError());
        assertEquals(1, executionResult.getExitCode());

        verify(channelSftp, times(1)).connect(OPTIONS.getConnectionTimeout());
        verify(channelSftp, times(1)).get("src", "dest");
        verify(channelSftp, times(1)).disconnect();

    }

    @Test(expected = IOException.class)
    public void download_shouldThrowIoException_whenJschExceptionThrown() throws IOException, JSchException {
        jSchSession.open(ENDPOINT, OPTIONS);
        when(session.openChannel("sftp")).thenThrow(JSchException.class);
        jSchSession.download("src", "dest");
    }

    @Test
    public void upload_shouldReturnExecutionResult_whenNoExceptionThrown() throws IOException, JSchException, SftpException {
        jSchSession.open(ENDPOINT, OPTIONS);
        ChannelSftp channelSftp = mock(ChannelSftp.class);
        when(session.openChannel("sftp")).thenReturn(channelSftp);
        ExecutionResult executionResult = jSchSession.upload("src", "dest");
        assertEquals("Uploaded at: dest", executionResult.getOutput());
        assertNull(executionResult.getError());
        assertEquals(0, executionResult.getExitCode());

        verify(channelSftp, times(1)).connect(OPTIONS.getConnectionTimeout());
        verify(channelSftp, times(1)).put("src", "dest");
        verify(channelSftp, times(1)).disconnect();

    }

    @Test
    public void upload_shouldReturnExecutionResult_whenSftpExceptionThrown() throws IOException, JSchException, SftpException {
        jSchSession.open(ENDPOINT, OPTIONS);
        ChannelSftp channelSftp = mock(ChannelSftp.class);
        doThrow(new SftpException(0, "my-message")).when(channelSftp).put("src", "dest");
        when(session.openChannel("sftp")).thenReturn(channelSftp);
        ExecutionResult executionResult = jSchSession.upload("src", "dest");
        assertNull(executionResult.getOutput());
        assertEquals("my-message", executionResult.getError());
        assertEquals(1, executionResult.getExitCode());

        verify(channelSftp, times(1)).connect(OPTIONS.getConnectionTimeout());
        verify(channelSftp, times(1)).put("src", "dest");
        verify(channelSftp, times(1)).disconnect();

    }

    @Test(expected = IOException.class)
    public void upload_shouldThrowIoException_whenJschExceptionThrown() throws IOException, JSchException {
        jSchSession.open(ENDPOINT, OPTIONS);
        when(session.openChannel("sftp")).thenThrow(JSchException.class);
        jSchSession.upload("src", "dest");
    }

}
