package com.github.gun88.fitnesse.fixture.ssh.session;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;
import util.StreamUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.util.Collections;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

public class SessionUtilsTest {

    @Rule
    public TemporaryFolder temporaryFolder = new TemporaryFolder();

    @Test
    public void inputStreamFromFileOrString_shouldReturnNull_whenNullProvided() throws FileNotFoundException {
        assertNull(SessionUtils.inputStreamFromFileOrString(null));
    }

    @Test
    public void inputStreamFromFileOrString_shouldReturnStringStream_whenNoExistentFilePathProvided() throws FileNotFoundException {
        InputStream inputStream = SessionUtils.inputStreamFromFileOrString("my-string");
        assertEquals("my-string", StreamUtils.inputStreamToString(inputStream));
    }

    @Test
    public void inputStreamFromFileOrString_shouldReturnFileContentStream_whenExistentFilePathProvided() throws IOException {
        File file = temporaryFolder.newFile();
        Files.write(file.toPath(), Collections.singletonList("my-content"));
        InputStream inputStream = SessionUtils.inputStreamFromFileOrString(file.getPath());
        assertEquals("my-content", StreamUtils.inputStreamToString(inputStream));
    }

    @Test
    public void bytesFromFileOrString_shouldReturnNull_whenNullProvided() throws IOException {
        assertNull(SessionUtils.bytesFromFileOrString(null));
    }

    @Test
    public void bytesFromFileOrString_shouldReturnStringStream_whenNoExistentFilePathProvided() throws IOException {
        byte[] bytes = SessionUtils.bytesFromFileOrString("my-string");
        assertEquals("my-string", new String(bytes));
    }

    @Test
    public void bytesFromFileOrString_shouldReturnFileContentStream_whenExistentFilePathProvided() throws IOException {
        File file = temporaryFolder.newFile();
        Files.write(file.toPath(), Collections.singletonList("my-content"));
        byte[] bytes = SessionUtils.bytesFromFileOrString(file.getPath());
        assertEquals("my-content", new String(bytes).trim());
    }

    @Test
    public void streamToString() {
    }
}
