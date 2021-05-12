package com.github.gun88.fitnesse.fixture.ssh.processor;

import org.junit.Test;
import util.MyOutputProcessor;

import static org.junit.Assert.assertTrue;

public class OutputProcessorFactoryTest {


    @Test(expected = ClassCastException.class)
    public void shouldThrowException_whenClassCanNotBeCastedToOutputProcessor() throws IllegalAccessException, InstantiationException, ClassNotFoundException {
        OutputProcessorFactory.get("com.github.gun88.fitnesse.fixture.ssh.session.DummySession");
    }

    @Test
    public void shouldReturnDefaultOutputProcessor_whenDefaultRequired() throws IllegalAccessException, InstantiationException, ClassNotFoundException {
        OutputProcessor outputProcessor = OutputProcessorFactory.get(null);
        assertTrue(outputProcessor instanceof DefaultOutputProcessor);
    }

    @Test
    public void shouldReturnMatchingProcessor_whenFound() throws IllegalAccessException, InstantiationException, ClassNotFoundException {
        OutputProcessor outputProcessor = OutputProcessorFactory.get("util.MyOutputProcessor");
        assertTrue(outputProcessor instanceof MyOutputProcessor);
    }

}
