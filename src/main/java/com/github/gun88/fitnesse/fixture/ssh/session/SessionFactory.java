package com.github.gun88.fitnesse.fixture.ssh.session;

public class SessionFactory {
    public static SshSession get(String sessionClassName, String host) throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        if (sessionClassName != null)
            return (SshSession) Class.forName(sessionClassName).newInstance();
        if (host != null && host.startsWith("ssh-fitnesse.dev"))
            return new DummySession();
        return new JSchSession();
    }
}
