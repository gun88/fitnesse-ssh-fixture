package util;

import com.github.gun88.fitnesse.fixture.ssh.endpoint.Endpoint;
import org.apache.commons.lang3.StringUtils;

public class EndpointUtils {
    public static int toIntPort(String port) {
        try {
            return Integer.parseInt(port);
        } catch (NumberFormatException e) {
            return 22;
        }
    }

    public static String unQuote(String string) {
        return StringUtils.unwrap(string, "\"");
    }

    public static String toConnectionString(String username, String password, String host, String port) {
        String connectionString = port == null ? host : host + ":" + port;
        if (username == null)
            return connectionString;
        return (password == null ? username : username + "/" + password) + "@" + connectionString;
    }

    public static Endpoint of(String connectionString) {
        connectionString = connectionString.trim();
        Endpoint endpoint = new Endpoint();
        endpoint.update(connectionString);
        return endpoint;
    }
}
