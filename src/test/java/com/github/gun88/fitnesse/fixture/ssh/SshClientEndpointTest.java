package com.github.gun88.fitnesse.fixture.ssh;

import com.github.gun88.fitnesse.fixture.ssh.endpoint.Endpoint;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.runners.Parameterized.Parameters;
import static util.EndpointUtils.*;

@RunWith(Parameterized.class)
public class SshClientEndpointTest {

    private final String username;
    private final String password;
    private final String host;
    private final int port;
    private final String connectionString;

    public SshClientEndpointTest(String username, String password, String host, int port, String connectionString) {
        this.username = username;
        this.password = password;
        this.host = host;
        this.port = port;
        this.connectionString = connectionString;
    }


    @Parameters(name = "{4}")
    public static Collection<Object[]> parameters() {
        List<Object[]> parameters = new ArrayList<>();

        for (String host : Arrays.asList("127.0.0.1", "my-host"))
            for (String username : Arrays.asList(null, "", "foo"))
                for (String password : Arrays.asList(null, "", "bar", "!\\\"£$%&/()  = "))
                    for (String port : Arrays.asList(null, "22", "2222"))
                        if (username != null || password == null) {
                            parameters.add(new Object[]{username, unQuote(password), host, toIntPort(port), toConnectionString(username, password, host, port)});

                        }

        return parameters;
    }

    @Test
    public void test() {
        Endpoint actualEndpoint = of(connectionString);

        assertEquals("username - " + connectionString, username, actualEndpoint.getUsername());
        assertEquals("password - " + connectionString, password, actualEndpoint.getPassword());
        assertEquals("host - " + connectionString, host, actualEndpoint.getHost());
        assertEquals("port - " + connectionString, port, actualEndpoint.getPort());
    }
}
