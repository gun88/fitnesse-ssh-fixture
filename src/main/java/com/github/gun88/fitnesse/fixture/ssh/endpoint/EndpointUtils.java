package com.github.gun88.fitnesse.fixture.ssh.endpoint;

import com.github.gun88.fitnesse.fixture.ssh.util.SshClientUtils;

import static java.lang.Integer.parseInt;

class EndpointUtils {
    static String extractHost(String connectionString) {
        return connectionString.replaceAll(":\\d*$", "").replaceAll("^.*@", "");
    }

    static String extractUsername(String connectionString) {
        if (hasCredential(connectionString)) {
            String credential = SshClientUtils.truncateAfterFirst(connectionString, '@');
            if (hasPassword(credential))
                return SshClientUtils.truncateAfterFirst(credential, '/');
            return credential;
        }
        return null;
    }

    static String extractPassword(String connectionString) {
        if (hasCredential(connectionString)) {
            String credential = SshClientUtils.truncateAfterFirst(connectionString, '@');
            if (hasPassword(credential))
                return SshClientUtils.truncateBeforeFirst(credential, '/');
            return null;
        }
        return null;
    }

    static int extractPort(String connectionString) {
        return hasPort(connectionString) ? parseInt(SshClientUtils.truncateBeforeLast(connectionString, ':')) : 22;
    }

    static String toConnectionString(String username, String password, String host, int port) {
        String connectionString = port == 22 ? host : host + ":" + port;
        if (username == null)
            return connectionString;
        return (password == null ? username : username + "/" + password) + "@" + connectionString;
    }

    private static boolean hasPassword(String credential) {
        return credential.contains("/");
    }

    private static boolean hasCredential(String connectionString) {
        return connectionString.matches("^.*@.+$");
    }

    private static boolean hasPort(String string) {
        return string.matches("^.+:\\d*$");
    }
}
