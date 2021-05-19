package com.github.gun88.fitnesse.fixture.ssh.endpoint;

import com.github.gun88.fitnesse.plugin.ssh.SshClientPlugin;
import lombok.Getter;
import lombok.Setter;

import static com.github.gun88.fitnesse.fixture.ssh.endpoint.EndpointUtils.*;

@Setter
@Getter
public class Endpoint {

    private String username;
    private String password;
    private String host;
    private int port = 22;

    @Override
    public String toString() {
        return toConnectionString(username, password, host, port);
    }

    public void update(String connectionString) {
        username = extractUsername(connectionString);
        password = extractPassword(connectionString);
        host = extractHost(connectionString);
        port = extractPort(connectionString);
    }

    public void reset() {
        username = null;
        password = null;
        host = null;
        port = 22;
        String fromProperties = SshClientPlugin.getProperty("ssh.fixture.endpoint");
        if (fromProperties != null)
            update(fromProperties);
    }

}

