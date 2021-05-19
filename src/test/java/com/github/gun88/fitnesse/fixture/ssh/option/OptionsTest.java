package com.github.gun88.fitnesse.fixture.ssh.option;

import org.junit.Test;

import static org.junit.Assert.*;

public class OptionsTest {

    @Test
    public void shouldReturnNullOrDefault_whenResetCalled() {
        Options options = new Options();
        options.add("PREFORMATTED");
        options.add("IGNORE_CARRIAGE_RETURN");
        options.add("SESSION_CLASS", "my-session-class");
        options.add("OUTPUT_PROCESSOR_CLASS", "my-output-processor-class");
        options.add("KNOWN_HOSTS", "my-known-hosts");
        options.add("PRIVATE_KEY", "my-private-key");
        options.add("PUBLIC_KEY", "my-public-key");
        options.add("PASSPHRASE", "my-passphrase");
        options.add("TERMINAL_WIDTH", "10");
        options.add("CONNECTION_TIMEOUT", "3000");
        options.add("REPLACE", "/foo/bar/");
        options.add("CUSTOM_1", "my-custom1");
        options.add("CUSTOM_2", "my-custom2");

        options.reset();
        assertFalse(options.isPreformatted());
        assertFalse(options.isIgnoreCarriageReturn());
        assertNull(options.getSessionClassName());
        assertNull(options.getOutputProcessorClassName());
        assertNull(options.getKnownHosts());
        assertNull(options.getPrivateKey());
        assertNull(options.getPublicKey());
        assertNull(options.getPassphrase());
        assertEquals(0, options.getTerminalWidth());
        assertEquals(0, options.getConnectionTimeout());
        assertTrue(options.getReplaceExpressions().isEmpty());
        assertTrue(options.getOtherOptions().isEmpty());
        assertTrue(options.dumpOptions().isEmpty());
    }

    @Test
    public void shouldResetValuesFromVmOptions_whenProvided() {
        System.setProperty("ssh.fixture.options", "PREFORMATTED " +
                "IGNORE_CARRIAGE_RETURN " +
                "SESSION_CLASS=my-session-class " +
                "OUTPUT_PROCESSOR_CLASS=my-output-processor-class " +
                "KNOWN_HOSTS=my-known-hosts " +
                "PRIVATE_KEY=my-private-key " +
                "PUBLIC_KEY=my-public-key " +
                "PASSPHRASE=my-passphrase " +
                "TERMINAL_WIDTH=20 " +
                "CONNECTION_TIMEOUT=3000 " +
                "REPLACE=/foo/bar/ " +
                "CUSTOM_1=my-custom1 " +
                "CUSTOM_2=my-custom2");
        Options options = new Options();

        options.reset();
        assertTrue(options.isPreformatted());
        assertTrue(options.isIgnoreCarriageReturn());
        assertEquals("my-session-class", options.getSessionClassName());
        assertEquals("my-output-processor-class", options.getOutputProcessorClassName());
        assertEquals("my-known-hosts", options.getKnownHosts());
        assertEquals("my-private-key", options.getPrivateKey());
        assertEquals("my-public-key", options.getPublicKey());
        assertEquals("my-passphrase", options.getPassphrase());
        assertEquals("my-terminal-width", 20, options.getTerminalWidth());
        assertEquals("my-connection-timeout", 3000, options.getConnectionTimeout());
        assertEquals(1, options.getReplaceExpressions().size());
        assertEquals("/foo/bar/", options.getReplaceExpressions().get(0).toString());
        assertEquals(2, options.getOtherOptions().size());
        assertEquals("CUSTOM_1=my-custom1", options.getOtherOptions().get(0).toString());
        assertEquals("CUSTOM_2=my-custom2", options.getOtherOptions().get(1).toString());
        assertEquals(13, options.dumpOptions().size());

        System.clearProperty("ssh.fixture.options");
    }

    @Test
    public void shouldResetSingleOption_whenKeyProvided() {
        Options options = new Options();
        options.add("PREFORMATTED");
        assertTrue(options.isPreformatted());
        options.reset("PREFORMATTED");
        assertFalse(options.isPreformatted());
        options.add("IGNORE_CARRIAGE_RETURN");
        assertTrue(options.isIgnoreCarriageReturn());
        options.reset("IGNORE_CARRIAGE_RETURN");
        assertFalse(options.isIgnoreCarriageReturn());
        options.add("SESSION_CLASS", "my-session-class");
        assertEquals("my-session-class", options.getSessionClassName());
        options.reset("SESSION_CLASS");
        assertNull(options.getSessionClassName());
        options.add("OUTPUT_PROCESSOR_CLASS", "my-output-processor-class");
        assertEquals("my-output-processor-class", options.getOutputProcessorClassName());
        options.reset("OUTPUT_PROCESSOR_CLASS");
        assertNull(options.getOutputProcessorClassName());
        options.add("KNOWN_HOSTS", "my-known-hosts");
        assertEquals("my-known-hosts", options.getKnownHosts());
        options.reset("KNOWN_HOSTS");
        assertNull(options.getKnownHosts());
        options.add("PRIVATE_KEY", "my-private-key");
        assertEquals("my-private-key", options.getPrivateKey());
        options.reset("PRIVATE_KEY");
        assertNull(options.getPrivateKey());
        options.add("PUBLIC_KEY", "my-public-key");
        assertEquals("my-public-key", options.getPublicKey());
        options.reset("PUBLIC_KEY");
        assertNull(options.getPublicKey());
        options.add("PASSPHRASE", "my-passphrase");
        assertEquals("my-passphrase", options.getPassphrase());
        options.reset("PASSPHRASE");
        assertNull(options.getPassphrase());
        options.add("TERMINAL_WIDTH", "10");
        assertEquals("my-terminal-width", 10, options.getTerminalWidth());
        options.reset("TERMINAL_WIDTH");
        assertEquals(0, options.getTerminalWidth());
        options.add("CONNECTION_TIMEOUT", "3000");
        assertEquals("my-connection-timeout", 3000, options.getConnectionTimeout());
        options.reset("CONNECTION_TIMEOUT");
        assertEquals(0, options.getConnectionTimeout());
        options.add("REPLACE", "/foo/bar/");
        assertEquals(1, options.getReplaceExpressions().size());
        options.reset("REPLACE");
        assertEquals(0, options.getReplaceExpressions().size());
        options.add("CUSTOM_1", "my-custom1");
        assertEquals(1, options.getOtherOptions().size());
        options.reset("CUSTOM_1");
        assertEquals(0, options.getOtherOptions().size());
    }

    @Test
    public void shouldAddOptions_whenCalled() {
        Options options = new Options();
        options.add("PREFORMATTED");
        options.add("IGNORE_CARRIAGE_RETURN");
        options.add("SESSION_CLASS", "my-session-class");
        options.add("OUTPUT_PROCESSOR_CLASS", "my-output-processor-class");
        options.add("KNOWN_HOSTS", "my-known-hosts");
        options.add("PRIVATE_KEY", "my-private-key");
        options.add("PUBLIC_KEY", "my-public-key");
        options.add("PASSPHRASE", "my-passphrase");
        options.add("TERMINAL_WIDTH", "10");
        options.add("CONNECTION_TIMEOUT", "3000");
        options.add("REPLACE", "/foo/bar/");
        options.add("CUSTOM_1", "my-custom1");
        options.add("CUSTOM_2", "my-custom2");

        assertTrue(options.isPreformatted());
        assertTrue(options.isIgnoreCarriageReturn());
        assertEquals("my-session-class", options.getSessionClassName());
        assertEquals("my-output-processor-class", options.getOutputProcessorClassName());
        assertEquals("my-known-hosts", options.getKnownHosts());
        assertEquals("my-private-key", options.getPrivateKey());
        assertEquals("my-public-key", options.getPublicKey());
        assertEquals("my-passphrase", options.getPassphrase());
        assertEquals("my-terminal-width", 10, options.getTerminalWidth());
        assertEquals("my-connection-timeout", 3000, options.getConnectionTimeout());
        assertEquals(1, options.getReplaceExpressions().size());
        assertEquals("/foo/bar/", options.getReplaceExpressions().get(0).toString());
        assertEquals(2, options.getOtherOptions().size());
        assertEquals("CUSTOM_1=my-custom1", options.getOtherOptions().get(0).toString());
        assertEquals("CUSTOM_2=my-custom2", options.getOtherOptions().get(1).toString());
        assertEquals(13, options.dumpOptions().size());
    }


    @Test
    public void shouldReturnEmptyList_whenEmptyStringProvided() {
        Options options = new Options();
        options.update("");
        assertTrue(options.dumpOptions().isEmpty());
    }

    @Test
    public void shouldReturnSingleOption_whenSingleStringProvided() {
        Options options = new Options();
        options.update("MY_OPTION");
        assertEquals(1, options.dumpOptions().size());
        assertEquals(options.dumpOptions().get(0).getKey(), "MY_OPTION");
        assertNull(options.dumpOptions().get(0).getValue());
    }

    @Test
    public void shouldReturnSingleOptionWithValue_whenSingleStringProvided() {
        Options options = new Options();
        options.update("MY_OPTION=my-value");
        assertEquals(1, options.dumpOptions().size());
        assertEquals(options.dumpOptions().get(0).getKey(), "MY_OPTION");
        assertEquals(options.dumpOptions().get(0).getValue(), "my-value");
    }

    @Test
    public void shouldReturnSingleOptionWithValueAndSpaces_whenSingleStringProvidedWithQuotes() {
        Options options = new Options();
        options.update("MY_OPTION=\"my value\"");
        assertEquals(1, options.dumpOptions().size());
        assertEquals(options.dumpOptions().get(0).getKey(), "MY_OPTION");
        assertEquals(options.dumpOptions().get(0).getValue(), "my value");
    }

    @Test
    public void shouldNotOverwrite_whenSameKeyProvided() {
        Options options = new Options();
        options.update("MY_OPTION=123 MY_OPTION=345");
        assertEquals(2, options.dumpOptions().size());
        assertEquals(options.dumpOptions().get(0).getKey(), "MY_OPTION");
        assertEquals(options.dumpOptions().get(0).getValue(), "123");
        assertEquals(options.dumpOptions().get(1).getKey(), "MY_OPTION");
        assertEquals(options.dumpOptions().get(1).getValue(), "345");
    }

    @Test
    public void shouldReturnMultipleOptions_whenDetected() {
        Options options = new Options();
        options.update("O1 O2=my-o2 O3=\"my o3\" O4=\"my \\\"o4\\\"\"");
        assertEquals(4, options.dumpOptions().size());
        assertEquals(options.dumpOptions().get(0).getKey(), "O1");
        assertNull(options.dumpOptions().get(0).getValue());
        assertEquals(options.dumpOptions().get(1).getKey(), "O2");
        assertEquals(options.dumpOptions().get(1).getValue(), "my-o2");
        assertEquals(options.dumpOptions().get(2).getKey(), "O3");
        assertEquals(options.dumpOptions().get(2).getValue(), "my o3");
        assertEquals(options.dumpOptions().get(3).getKey(), "O4");
        assertEquals(options.dumpOptions().get(3).getValue(), "my \"o4\"");
    }
}
