package com.github.gun88.fitnesse.fixture.ssh.result;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ExecutionResult {
    private String output;
    private String error;
    private int exitCode;

}
