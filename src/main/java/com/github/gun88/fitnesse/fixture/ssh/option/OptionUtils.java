package com.github.gun88.fitnesse.fixture.ssh.option;

import com.github.gun88.fitnesse.fixture.ssh.util.SshClientUtils;

import java.util.List;

class OptionUtils {

    static String extractOptionKey(String string) {
        if (string.contains("="))
            return SshClientUtils.truncateAfterFirst(string, '=').trim();
        return string;
    }

    static String extractOptionValue(String string) {
        if (string.contains("="))
            return SshClientUtils.truncateBeforeFirst(string, '=').trim();
        else
            return null;
    }

    static String unQuote(String string) {
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

    static List<String> splitOptions(String optionString) {
        return SshClientUtils.splitQuoted(optionString, ' ');
    }

}
