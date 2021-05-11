package com.github.gun88.fitnesse.fixture.ssh.util;

import java.io.*;
import java.nio.file.Files;

public class SessionUtils {
    public static InputStream inputStreamFromFileOrString(String string) throws FileNotFoundException {
        if (string == null) return null;
        File file = new File(string);
        return file.exists() ? new FileInputStream(file) : new ByteArrayInputStream(string.getBytes());
    }

    public static byte[] bytesFromFileOrString(String string) throws IOException {
        if (string == null) return null;
        File file = new File(string);
        return file.exists() ? Files.readAllBytes(file.toPath()) : string.getBytes();
    }
}
