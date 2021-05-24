package com.github.gun88.fitnesse.fixture.ssh.processor;

import fitnesse.html.HtmlUtil;

import java.util.Arrays;
import java.util.stream.IntStream;

import static java.util.stream.Collectors.joining;

class ProcessorUtils {
    static String wrapPreformatted(String string) {
        if (string != null) {
            string = string.replace(HtmlUtil.BR.html(), "\n");
            string = HtmlUtil.escapeHTML(string);
        }
        return "<pre>" + string + "</pre>";
    }

    static String manageCarriageReturn(String string) {
        string = string.replaceAll("\\r\\n", "\n");
        return Arrays.stream(string.split("\\n"))
                .map(ProcessorUtils::manageCarriageReturnInLine)
                .collect(joining("\n"));
    }

    private static String manageCarriageReturnInLine(String line) {
        String[] split = line.split("\r");
        return split[split.length - 1];
    }

    static String formatToTerminalWidth(String string, Integer terminalWidth) {
        return Arrays.stream(string.replace(HtmlUtil.BR.html(), "\n").split("\\n"))
                .flatMap(line -> IntStream.rangeClosed(0, line.length() / terminalWidth)
                        .mapToObj(from -> substringFromAndSize(line, from, terminalWidth)))
                .collect(joining(HtmlUtil.BR.html()));
    }


    private static String substringFromAndSize(String string, int from, int size) {
        return string.substring(from * size, Math.min((from + 1) * size, string.length()));
    }
}
