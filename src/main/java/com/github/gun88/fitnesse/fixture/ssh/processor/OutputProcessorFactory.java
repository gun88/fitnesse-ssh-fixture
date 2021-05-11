package com.github.gun88.fitnesse.fixture.ssh.processor;

public class OutputProcessorFactory {
    public static OutputProcessor get(String outputProcessorClassName) throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        if (outputProcessorClassName != null)
            return (OutputProcessor) Class.forName(outputProcessorClassName).newInstance();
        return new DefaultOutputProcessor();
    }
}
