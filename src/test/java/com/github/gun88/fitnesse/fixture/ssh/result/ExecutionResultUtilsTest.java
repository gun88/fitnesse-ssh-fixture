package com.github.gun88.fitnesse.fixture.ssh.result;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

public class ExecutionResultUtilsTest {

    @Test
    public void replaceNull_shouldReplaceNull_whenFound() {
        ExecutionResult executionResult = new ExecutionResult();
        assertNull(executionResult.getError());
        assertNull(executionResult.getOutput());
        ExecutionResultUtils.replaceNull(executionResult);
        assertEquals("", executionResult.getOutput());
        assertEquals("", executionResult.getError());
    }

    @Test
    public void replaceNull_shouldNotReplaceNull_whenEvaluated() {
        ExecutionResult executionResult = new ExecutionResult();
        executionResult.setOutput("out");
        executionResult.setError("err");
        ExecutionResultUtils.replaceNull(executionResult);
        assertEquals("out", executionResult.getOutput());
        assertEquals("err", executionResult.getError());
    }
}
