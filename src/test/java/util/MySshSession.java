package util;

import com.github.gun88.fitnesse.fixture.ssh.endpoint.Endpoint;
import com.github.gun88.fitnesse.fixture.ssh.option.Options;
import com.github.gun88.fitnesse.fixture.ssh.result.ExecutionResult;
import com.github.gun88.fitnesse.fixture.ssh.session.SshSession;

public class MySshSession implements SshSession {

    @Override
    public void open(Endpoint endpoint, Options options) {

    }

    @Override
    public void close() {

    }

    @Override
    public ExecutionResult execute(String command) {
        return null;
    }

    @Override
    public ExecutionResult download(String source, String destination) {
        return null;
    }

    @Override
    public ExecutionResult upload(String source, String destination) {
        return null;
    }
}
