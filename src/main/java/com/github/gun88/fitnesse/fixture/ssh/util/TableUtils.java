package com.github.gun88.fitnesse.fixture.ssh.util;

public class TableUtils {
    public static String unwrapPreformatted(String value) {
        if (value == null)
            return null;
        return value.replaceAll("^\\s*<pre>", "").replaceAll("</pre>\\s*$", "");
    }
}
