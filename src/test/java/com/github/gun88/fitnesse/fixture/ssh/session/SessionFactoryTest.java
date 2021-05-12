package com.github.gun88.fitnesse.fixture.ssh.session;

import org.junit.Test;
import util.MySshSession;

import static org.junit.Assert.assertTrue;

public class SessionFactoryTest {

    @Test
    public void shouldReturnDummySession_whenDummyHostnameProvided() throws IllegalAccessException, InstantiationException, ClassNotFoundException {
        SshSession sshSession = SessionFactory.get(null, "ssh-fitnesse.dev");
        assertTrue(sshSession instanceof DummySession);
    }

    @Test
    public void shouldIgnoreDummyHostname_whenSessionClassNameProvided() throws IllegalAccessException, InstantiationException, ClassNotFoundException {
        SshSession sshSession = SessionFactory.get("util.MySshSession", "ssh-fitnesse.dev");
        assertTrue(sshSession instanceof MySshSession);
    }

    @Test(expected = ClassCastException.class)
    public void shouldThrowException_whenClassCanNotBeCastedToSshSession() throws IllegalAccessException, InstantiationException, ClassNotFoundException {
        SessionFactory.get("com.github.gun88.fitnesse.fixture.ssh.processor.DefaultOutputProcessor", "");
    }

    @Test
    public void shouldReturnJschSession_whenDefaultRequired() throws IllegalAccessException, InstantiationException, ClassNotFoundException {
        SshSession sshSession = SessionFactory.get(null, null);
        assertTrue(sshSession instanceof JSchSession);
    }

    @Test
    public void shouldReturnMatchingProcessor_whenFound() throws IllegalAccessException, InstantiationException, ClassNotFoundException {
        SshSession outputProcessor = SessionFactory.get("util.MySshSession", "");
        assertTrue(outputProcessor instanceof MySshSession);
    }

}
