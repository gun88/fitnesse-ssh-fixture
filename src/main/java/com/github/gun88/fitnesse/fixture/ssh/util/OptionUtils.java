package com.github.gun88.fitnesse.fixture.ssh.util;

import java.util.List;

public class OptionUtils {

    public static String extractOptionKey(String string) {
        if (string.contains("="))
            return SshClientUtils.truncateAfterFirst(string, '=').trim();
        return string;
    }

    public static String extractOptionValue(String string) {
        if (string.contains("="))
            return SshClientUtils.truncateBeforeFirst(string, '=').trim();
        else
            return null;
    }

    public static String unQuote(String string) {
        if (string == null)
            return null;
        string = string.trim();
        if (!string.startsWith("\"") || !string.endsWith("\"")) {
            return string;
        }
        string = string.substring(1, string.length() - 1);
        string = string.replace("\\\"", "\"");
        return string;

    }

    public static List<String> splitOptions(String optionString) {
        return SshClientUtils.splitQuoted(optionString, ' ');
    }
}
