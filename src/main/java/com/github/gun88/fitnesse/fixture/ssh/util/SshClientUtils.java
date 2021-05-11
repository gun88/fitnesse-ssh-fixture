package com.github.gun88.fitnesse.fixture.ssh.util;

import com.github.gun88.fitnesse.fixture.ssh.result.ExecutionResult;

import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class SshClientUtils {
    @SuppressWarnings("SameParameterValue")
    static String truncateBeforeLast(String string, char character) {
        return string.substring(string.lastIndexOf(character) + 1);
    }

    static String truncateBeforeFirst(String string, char character) {
        return string.substring(string.indexOf(character) + 1);
    }

    static String truncateAfterFirst(String string, char character) {
        return string.substring(0, string.indexOf(character));
    }

    public static String toString(InputStream stream) throws IOException {
        StringBuilder outputBuffer = new StringBuilder();
        int readByte;
        while ((readByte = stream.read()) != 0xffffffff) {
            outputBuffer.append((char) readByte);
        }

        return outputBuffer.toString().trim();
    }

    public static List<String> splitQuoted(String optionString, char separator) {
        String separatorReplace = "<\\$separator\\$>" + new Random().nextInt(100) + "<";
        char[] characters = optionString.toCharArray();

        StringBuilder s = new StringBuilder();
        boolean quoteClosed = true;
        for (int i = 0; i < characters.length; i++) {
            if (characters[i] == '"' && (i > 0 && characters[i - 1] != '\\'))
                quoteClosed = !quoteClosed;
            s.append(!quoteClosed && characters[i] == separator ? separatorReplace : Character.valueOf(characters[i]));
        }

        return Arrays.stream(s.toString().split("[" + separator + "]+"))
                .map(x -> x.replace(separatorReplace, separator + ""))
                .collect(Collectors.toList());
    }

    public static String unwrapPreformatted(String value) {
        if (value == null) return null;
        return value.replaceAll("^\\s*<pre>", "").replaceAll("</pre>\\s*$", "");
    }

    public static void replaceNull(ExecutionResult result) {
        if (result.getOutput() == null) result.setOutput("");
        if (result.getError() == null) result.setError("");
    }
}
