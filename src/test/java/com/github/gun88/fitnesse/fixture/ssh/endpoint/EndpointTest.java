package com.github.gun88.fitnesse.fixture.ssh.endpoint;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

public class EndpointTest {

    @Test
    public void shouldUpdateEndpoint_whenFullConnectionStringProvided() {
        Endpoint endpoint = new Endpoint();
        endpoint.update("my-username/my-password@my-host:123");
        assertEquals("my-username", endpoint.getUsername());
        assertEquals("my-password", endpoint.getPassword());
        assertEquals("my-host", endpoint.getHost());
        assertEquals(123, endpoint.getPort());
        assertEquals("my-username/my-password@my-host:123", endpoint.toString());
    }

    @Test
    public void shouldNotEvaluatePassword_whenOnlyUsernameProvided() {
        Endpoint endpoint = new Endpoint();
        endpoint.update("my-username@my-host:123");
        assertEquals("my-username", endpoint.getUsername());
        assertNull(endpoint.getPassword());
        assertEquals("my-host", endpoint.getHost());
        assertEquals(123, endpoint.getPort());
        assertEquals("my-username@my-host:123", endpoint.toString());
    }

    @Test
    public void shouldNotEvaluateUsernameAndPassword_whenCredentialNotProvided() {
        Endpoint endpoint = new Endpoint();
        endpoint.update("my-host:123");
        assertNull(endpoint.getUsername());
        assertNull(endpoint.getPassword());
        assertEquals("my-host", endpoint.getHost());
        assertEquals(123, endpoint.getPort());
        assertEquals("my-host:123", endpoint.toString());
    }

    @Test
    public void shouldReturnNullOrDefault_whenResetCalled() {
        Endpoint endpoint = new Endpoint();
        endpoint.setUsername("my-username");
        endpoint.setPassword("my-password");
        endpoint.setHost("my-host");
        endpoint.setPort(123);
        endpoint.reset();
        assertNull(endpoint.getUsername());
        assertNull(endpoint.getPassword());
        assertNull(endpoint.getHost());
        assertEquals(22, endpoint.getPort());
        assertNull(endpoint.toString());
    }

    @Test
    public void shouldResetValuesFromVmOptions_whenProvided() {
        System.setProperty("ssh.fixture.endpoint", "my-username/my-password@my-host:123");
        Endpoint endpoint = new Endpoint();
        endpoint.setUsername("foo");
        endpoint.setPassword("bar");
        endpoint.setHost("zoo");
        endpoint.setPort(234);
        endpoint.reset();
        assertEquals("my-username", endpoint.getUsername());
        assertEquals("my-password", endpoint.getPassword());
        assertEquals("my-host", endpoint.getHost());
        assertEquals(123, endpoint.getPort());
        assertEquals("my-username/my-password@my-host:123", endpoint.toString());

        System.clearProperty("ssh.fixture.endpoint");

    }
}
