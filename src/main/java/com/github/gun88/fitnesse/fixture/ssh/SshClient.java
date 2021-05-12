package com.github.gun88.fitnesse.fixture.ssh;

import com.github.gun88.fitnesse.fixture.ssh.endpoint.Endpoint;
import com.github.gun88.fitnesse.fixture.ssh.option.Options;
import com.github.gun88.fitnesse.fixture.ssh.processor.OutputProcessor;
import com.github.gun88.fitnesse.fixture.ssh.processor.OutputProcessorFactory;
import com.github.gun88.fitnesse.fixture.ssh.result.ExecutionResult;
import com.github.gun88.fitnesse.fixture.ssh.result.ExecutionResultUtils;
import com.github.gun88.fitnesse.fixture.ssh.session.SessionFactory;
import com.github.gun88.fitnesse.fixture.ssh.session.SshSession;

import java.io.IOException;

import static com.github.gun88.fitnesse.fixture.ssh.util.TableUtils.unwrapPreformatted;
import static java.lang.Integer.parseInt;

public class SshClient {
    // todo maven
    // todo unit test

    private final Endpoint endpoint = new Endpoint();
    private final Options options = new Options();
    private SshSession session;
    private OutputProcessor outputProcessor;
    private ExecutionResult result;
    private String command;

    public SshClient() {
        resetEndpoint();
        resetOptions();
    }

    public SshClient(String endpoint) {
        this();
        endpoint(endpoint);
    }

    public SshClient(String endpoint, String options) {
        this(endpoint);
        options(options);
    }

    public void endpoint(String endpoint) {
        this.endpoint.update(unwrapPreformatted(endpoint));
    }

    public void options(String options) {
        this.options.update(unwrapPreformatted(options));
    }

    public void addOptionWithValue(String key, String value) {
        this.options.add(unwrapPreformatted(key), unwrapPreformatted(value));
    }

    public void addOption(String key) {
        addOptionWithValue(unwrapPreformatted(key), null);
    }

    public void resetOption(String key) {
        this.options.reset(unwrapPreformatted(key));
    }

    public void resetOptions() {
        this.options.reset();
    }

    public void resetEndpoint() {
        endpoint.reset();
    }

    public void username(String username) {
        this.endpoint.setUsername(unwrapPreformatted(username));
    }

    public void password(String password) {
        this.endpoint.setPassword(unwrapPreformatted(password));
    }

    public void host(String host) {
        this.endpoint.setHost(unwrapPreformatted(host));
    }

    public void port(String port) {
        this.endpoint.setPort(parseInt(unwrapPreformatted(port)));
    }

    public void setCommand(String command) {
        this.command = unwrapPreformatted(command);
    }

    public void execute(String command) throws IOException {
        result = session.execute(unwrapPreformatted(command));
        ExecutionResultUtils.replaceNull(result);
        outputProcessor.after(result, options);
    }

    public void downloadTo(String source, String destination) throws IOException {
        result = session.download(unwrapPreformatted(source), unwrapPreformatted(destination));
        ExecutionResultUtils.replaceNull(result);
        outputProcessor.after(result, options);
    }

    public void uploadTo(String source, String destination) throws IOException {
        result = session.upload(unwrapPreformatted(source), unwrapPreformatted(destination));
        ExecutionResultUtils.replaceNull(result);
        outputProcessor.after(result, options);
    }

    public void openConnection() throws IOException, IllegalAccessException, InstantiationException, ClassNotFoundException {
        session = SessionFactory.get(options.getSessionClassName(), endpoint.getHost());
        session.open(endpoint, options);
        outputProcessor = OutputProcessorFactory.get(options.getOutputProcessorClassName());
    }

    public void closeConnection() throws IOException {
        session.close();
    }

    public void beginTable() throws IOException, IllegalAccessException, ClassNotFoundException, InstantiationException {
        openConnection();
    }

    public void endTable() throws IOException {
        closeConnection();
    }

    public void execute() throws IOException {
        execute(command);
    }

    public String output() {
        return result.getOutput();
    }

    public String error() {
        return result.getError();
    }

    public int exitCode() {
        return result.getExitCode();
    }


}

