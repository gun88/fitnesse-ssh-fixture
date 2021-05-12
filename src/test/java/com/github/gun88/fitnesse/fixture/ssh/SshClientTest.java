package com.github.gun88.fitnesse.fixture.ssh;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class SshClientTest {

    // NOTE: simple unit test. SshClient class will be tested against FitNesse integrations tests.

    @Rule
    public TemporaryFolder temporaryFolder = new TemporaryFolder();

    @Test
    public void simpleExecution() throws ClassNotFoundException, InstantiationException, IllegalAccessException, IOException {
        SshClient sshClient = new SshClient("old.host.dev", "MY_OPTION");

        sshClient.username("foo");
        sshClient.password("bar");
        sshClient.host("ssh-fitnesse.dev");
        sshClient.port("1234");

        sshClient.resetOption("MY_OPTION");
        sshClient.addOption("PREFORMATTED");
        sshClient.addOptionWithValue("TERMINAL_WIDTH", "90");

        sshClient.beginTable();
        sshClient.setCommand("ls -la");
        sshClient.execute();
        sshClient.endTable();
        assertEquals("<pre>" +
                "-rwxrwxrwx 1 foo foo        20 Oct 29  2020 ." + "\n" +
                "-rwxrwxrwx 1 foo foo        20 Oct 29  2020 .." + "\n" +
                "-rwxrwxrwx 1 foo foo        20 Oct 29  2020 file0.txt" + "\n" +
                "-rwxrwxrwx 1 foo foo        20 Oct 29  2020 file1.txt" + "\n" +
                "-rwxrwxrwx 1 foo foo        20 Oct 29  2020 file2.txt" + "\n" +
                "-rwxrwxrwx 1 foo foo        20 Oct 29  2020 file3.txt" + "\n" +
                "-rwxrwxrwx 1 foo foo        20 Oct 29  2020 file4.txt" + "\n" +
                "-rwxrwxrwx 1 foo foo        20 Oct 29  2020 file5.txt" + "\n" +
                "-rwxrwxrwx 1 foo foo        20 Oct 29  2020 file6.txt" + "\n" +
                "-rwxrwxrwx 1 foo foo        20 Oct 29  2020 file7.txt" + "\n" +
                "-rwxrwxrwx 1 foo foo        20 Oct 29  2020 file8.txt" + "\n" +
                "-rwxrwxrwx 1 foo foo        20 Oct 29  2020 file9.txt" +
                "</pre>", sshClient.output());
        assertEquals("<pre></pre>", sshClient.error());
        assertEquals(0, sshClient.exitCode());
    }

    @Test
    public void simpleSftp() throws ClassNotFoundException, InstantiationException, IllegalAccessException, IOException {

        File file = temporaryFolder.newFile("my-file.txt");
        Files.write(file.toPath(), Arrays.asList("foo", "bar"));

        SshClient sshClient = new SshClient("foo/bar@ssh-fitnesse.dev");

        sshClient.openConnection();

        sshClient.uploadTo(file.getPath(), "my-file.txt");
        assertEquals("Uploaded at: my-file.txt", sshClient.output());
        assertEquals("", sshClient.error());
        assertEquals(0, sshClient.exitCode());

        sshClient.execute("cat my-file.txt");
        assertEquals("foo\nbar", sshClient.output());
        assertEquals("", sshClient.error());
        assertEquals(0, sshClient.exitCode());

        sshClient.execute("echo zoo >my-file.txt");
        assertEquals("", sshClient.output());
        assertEquals("", sshClient.error());
        assertEquals(0, sshClient.exitCode());

        sshClient.downloadTo("my-file.txt", file.getPath());
        assertEquals("Downloaded at: " + file.getPath(), sshClient.output());
        assertEquals("", sshClient.error());
        assertEquals(0, sshClient.exitCode());

        sshClient.closeConnection();

        List<String> strings = Files.readAllLines(file.toPath());

        assertEquals(1, strings.size());
        assertEquals("zoo", strings.get(0));

    }
}
