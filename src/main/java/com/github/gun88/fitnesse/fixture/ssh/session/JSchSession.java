package com.github.gun88.fitnesse.fixture.ssh.session;

import com.github.gun88.fitnesse.fixture.ssh.endpoint.Endpoint;
import com.github.gun88.fitnesse.fixture.ssh.option.Options;
import com.github.gun88.fitnesse.fixture.ssh.result.ExecutionResult;
import com.github.gun88.fitnesse.fixture.ssh.util.SshClientUtils;
import com.jcraft.jsch.*;

import java.io.IOException;
import java.io.InputStream;

import static com.github.gun88.fitnesse.fixture.ssh.util.SessionUtils.bytesFromFileOrString;
import static com.github.gun88.fitnesse.fixture.ssh.util.SessionUtils.inputStreamFromFileOrString;

public class JSchSession implements SshSession {
    JSch jSch = new JSch();
    private Session session;
    private Options options;

    @Override
    public void open(Endpoint endpoint, Options options) throws IOException {
        try {
            this.options = options;
            session = jSch.getSession(endpoint.getUsername(), endpoint.getHost(), endpoint.getPort());
            if (options.getKnownHosts() != null) {
                jSch.setKnownHosts(inputStreamFromFileOrString(options.getKnownHosts()));
            } else {
                session.setConfig("StrictHostKeyChecking", "no");
            }
            if (options.getPrivateKey() != null) {
                jSch.addIdentity("ssh-fixture",
                        bytesFromFileOrString(options.getPrivateKey()),
                        bytesFromFileOrString(options.getPublicKey()),
                        bytesFromFileOrString(options.getPassphrase()));
            } else {
                session.setPassword(endpoint.getPassword());
            }
            session.connect(options.getConnectionTimeout());
        } catch (JSchException e) {
            throw new IOException(e);
        }
    }

    @Override
    public void close() {
        session.disconnect();
    }

    @Override
    public ExecutionResult execute(String command) throws IOException {
        try {
            ChannelExec channelExec = (ChannelExec) session.openChannel("exec");
            channelExec.setCommand(command);
            InputStream inputStream = channelExec.getInputStream();
            InputStream errorStream = channelExec.getErrStream();
            channelExec.connect(options.getConnectionTimeout());
            ExecutionResult result = new ExecutionResult();
            result.setOutput(SshClientUtils.toString(inputStream));
            result.setError(SshClientUtils.toString(errorStream));
            result.setExitCode(channelExec.getExitStatus());
            channelExec.disconnect();
            return result;
        } catch (JSchException e) {
            throw new IOException(e);
        }

    }

    @Override
    public ExecutionResult download(String source, String destination) throws IOException {
        ExecutionResult result = new ExecutionResult();
        try {
            ChannelSftp channelSftp = (ChannelSftp) session.openChannel("sftp");
            channelSftp.connect(options.getConnectionTimeout());
            channelSftp.get(source, destination);
            channelSftp.disconnect();
            result.setOutput("Downloaded at: " + destination);
            result.setExitCode(0);
        } catch (JSchException e) {
            throw new IOException(e);
        } catch (SftpException e) {
            result.setError(e.getMessage());
            result.setExitCode(1);
        }
        return result;
    }

    @Override
    public ExecutionResult upload(String source, String destination) throws IOException {
        ExecutionResult result = new ExecutionResult();
        try {
            ChannelSftp channelSftp = (ChannelSftp) session.openChannel("sftp");
            channelSftp.connect(options.getConnectionTimeout());
            channelSftp.put(source, destination);
            channelSftp.disconnect();
            result.setOutput("Uploaded at: " + destination);
            result.setExitCode(0);
        } catch (JSchException e) {
            throw new IOException(e);
        } catch (SftpException e) {
            result.setError(e.getMessage());
            result.setExitCode(1);
        }
        return result;
    }

}
