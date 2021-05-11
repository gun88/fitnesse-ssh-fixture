package com.github.gun88.fitnesse.fixture.ssh.session;

import com.github.gun88.fitnesse.fixture.ssh.endpoint.Endpoint;
import com.github.gun88.fitnesse.fixture.ssh.option.Options;
import com.github.gun88.fitnesse.fixture.ssh.result.ExecutionResult;

import java.io.Closeable;
import java.io.IOException;

public interface SshSession extends Closeable {

    void open(Endpoint endpoint, Options options) throws IOException;

    void close() throws IOException;

    ExecutionResult execute(String command) throws IOException;

    ExecutionResult download(String source, String destination) throws IOException;

    ExecutionResult upload(String source, String destination) throws IOException;
}
