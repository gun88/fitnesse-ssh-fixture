package com.github.gun88.fitnesse.fixture.ssh.processor;

import com.github.gun88.fitnesse.fixture.ssh.option.Options;
import com.github.gun88.fitnesse.fixture.ssh.result.ExecutionResult;

public interface OutputProcessor {

    void after(ExecutionResult result, Options options);

}
