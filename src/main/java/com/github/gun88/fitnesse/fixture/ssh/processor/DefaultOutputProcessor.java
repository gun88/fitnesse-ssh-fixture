package com.github.gun88.fitnesse.fixture.ssh.processor;

import com.github.gun88.fitnesse.fixture.ssh.option.Options;
import com.github.gun88.fitnesse.fixture.ssh.option.ReplaceExpression;
import com.github.gun88.fitnesse.fixture.ssh.result.ExecutionResult;

public class DefaultOutputProcessor implements OutputProcessor {

    @Override
    public void after(ExecutionResult result, Options options) {
        result.setOutput(process(result.getOutput(), options));
        result.setError(process(result.getError(), options));
    }

    private String process(String string, Options options) {
        if (string == null)
            return null;

        for (ReplaceExpression expression : options.getReplaceExpressions())
            string = expression.doReplace(string);

        if (!options.isIgnoreCarriageReturn())
            string = ProcessorUtils.manageCarriageReturn(string);

        if (options.getTerminalWidth() != 0)
            string = ProcessorUtils.formatToTerminalWidth(string, options.getTerminalWidth());

        if (options.isPreformatted())
            string = ProcessorUtils.wrapPreformatted(string);

        return string;

    }

}
