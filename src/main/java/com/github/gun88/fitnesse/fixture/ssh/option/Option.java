package com.github.gun88.fitnesse.fixture.ssh.option;

import com.github.gun88.fitnesse.fixture.ssh.util.OptionUtils;
import lombok.Getter;

@Getter
public class Option {
    private String key;
    private String value;

    Option(String key, String value) {
        this.key = key;
        this.value = value;
    }

    public static Option of(String part) {
        String key = OptionUtils.extractOptionKey(part);
        String value = OptionUtils.extractOptionValue(part);
        value = OptionUtils.unQuote(value);
        return new Option(key, value);
    }

    public String toString() {
        return value != null ? key + "=" + value : key;
    }
}
