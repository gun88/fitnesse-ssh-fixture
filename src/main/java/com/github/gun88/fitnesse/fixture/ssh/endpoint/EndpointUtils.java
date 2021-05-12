package com.github.gun88.fitnesse.fixture.ssh.endpoint;

import com.github.gun88.fitnesse.fixture.ssh.util.SshClientUtils;

import static java.lang.Integer.parseInt;

public class EndpointUtils {
    public static String extractHost(String connectionString) {
        return connectionString.replaceAll(":\\d*$", "").replaceAll("^.*@", "");
    }

    public static String extractUsername(String connectionString) {
        if (hasCredential(connectionString)) {
            String credential = SshClientUtils.truncateAfterFirst(connectionString, '@');
            if (hasPassword(credential))
                return SshClientUtils.truncateAfterFirst(credential, '/');
            return credential;
        }
        return null;
    }

    public static String extractPassword(String connectionString) {
        if (hasCredential(connectionString)) {
            String credential = SshClientUtils.truncateAfterFirst(connectionString, '@');
            if (hasPassword(credential))
                return SshClientUtils.truncateBeforeFirst(credential, '/');
            return null;
        }
        return null;
    }

    private static boolean hasPassword(String credential) {
        return credential.contains("/");
    }

    private static boolean hasCredential(String connectionString) {
        return connectionString.matches("^.*@.+$");
    }

    public static int extractPort(String connectionString) {
        return hasPort(connectionString) ? parseInt(SshClientUtils.truncateBeforeLast(connectionString, ':')) : 22;
    }

    private static boolean hasPort(String string) {
        return string.matches("^.+:\\d*$");
    }

    public static String toConnectionString(String username, String password, String host, int port) {
        String connectionString = port == 22 ? host : host + ":" + port;
        if (username == null)
            return connectionString;
        return (password == null ? username : username + "/" + password) + "@" + connectionString;
    }


    public void update(Endpoint endpoint, String endpointString) {
        endpoint.update(endpointString);
    }

    public void reset(Endpoint endpoint) {
        endpoint.reset();
    }

    public void setUsername(Endpoint endpoint, String username) {
        endpoint.setUsername(username);
    }

    public void setPassword(Endpoint endpoint, String password) {
        endpoint.setPassword(password);
    }

    public void setHost(Endpoint endpoint, String host) {
        endpoint.setHost(host);
    }

    public void setPort(Endpoint endpoint, String port) {
        endpoint.setPort(Integer.parseInt(port));
    }
}
