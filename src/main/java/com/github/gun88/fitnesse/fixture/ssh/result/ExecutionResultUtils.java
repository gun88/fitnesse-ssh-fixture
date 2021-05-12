package com.github.gun88.fitnesse.fixture.ssh.result;

public class ExecutionResultUtils {
    public static void replaceNull(ExecutionResult result) {
        if (result.getOutput() == null)
            result.setOutput("");
        if (result.getError() == null)
            result.setError("");
    }
}
