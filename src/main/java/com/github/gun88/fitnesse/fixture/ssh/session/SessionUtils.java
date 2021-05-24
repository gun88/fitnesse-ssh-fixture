package com.github.gun88.fitnesse.fixture.ssh.session;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

class SessionUtils {

    static InputStream inputStreamFromFileOrString(String string) throws FileNotFoundException {
        if (string == null)
            return null;
        return exist(string) ? toFileInputStream(string) : toByteArrayInputStream(string);
    }

    static byte[] bytesFromFileOrString(String string) throws IOException {
        if (string == null)
            return null;
        if (exist(string))
            return bytesFromFile(string);
        else
            return bytesFrom(string);
    }

    static String streamToString(InputStream stream) throws IOException {
        StringBuilder outputBuffer = new StringBuilder();
        int readByte;
        while ((readByte = stream.read()) != 0xffffffff) {
            outputBuffer.append((char) readByte);
        }

        return outputBuffer.toString().trim();
    }

    private static ByteArrayInputStream toByteArrayInputStream(String string) {
        return new ByteArrayInputStream(string.getBytes());
    }

    private static FileInputStream toFileInputStream(String string) throws FileNotFoundException {
        return new FileInputStream(string);
    }

    private static boolean exist(String string) {
        return Files.exists(Paths.get(string));
    }

    private static byte[] bytesFrom(String string) {
        return string.getBytes();
    }

    private static byte[] bytesFromFile(String string) throws IOException {
        return Files.readAllBytes(Paths.get(string));
    }
}
