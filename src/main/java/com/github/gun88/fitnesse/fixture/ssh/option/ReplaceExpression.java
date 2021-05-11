package com.github.gun88.fitnesse.fixture.ssh.option;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ReplaceExpression {

    private static final Pattern PATTERN = Pattern.compile("^/(.+?)/(?<!\\\\/)(.*?)/$");
    private String regex;
    private String replacement;

    static ReplaceExpression of(String expression) {

        Matcher matcher = PATTERN.matcher(expression);
        if (!matcher.find())
            throw new RuntimeException("Invalid replace expression: " + expression);

        ReplaceExpression replaceExpression = new ReplaceExpression();
        replaceExpression.regex = matcher.group(1);
        replaceExpression.replacement = matcher.group(2);
        return replaceExpression;
    }

    public String doReplace(String string) {
        return string.replaceAll(regex, replacement);
    }

    public String toString() {
        return "/" + regex + "/" + replacement + "/";
    }
}
