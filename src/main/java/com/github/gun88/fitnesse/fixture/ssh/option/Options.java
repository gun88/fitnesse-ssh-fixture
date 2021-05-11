package com.github.gun88.fitnesse.fixture.ssh.option;

import com.github.gun88.fitnesse.fixture.ssh.util.OptionUtils;
import com.github.gun88.fitnesse.plugin.ssh.SshClientPlugin;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class Options {

    private static final String PREFORMATTED = "PREFORMATTED";
    private static final String IGNORE_CARRIAGE_RETURN = "IGNORE_CARRIAGE_RETURN";
    private static final String SESSION_CLASS = "SESSION_CLASS";
    private static final String OUTPUT_PROCESSOR_CLASS = "OUTPUT_PROCESSOR_CLASS";
    private static final String KNOWN_HOSTS = "KNOWN_HOSTS";
    private static final String PRIVATE_KEY = "PRIVATE_KEY";
    private static final String PUBLIC_KEY = "PUBLIC_KEY";
    private static final String PASSPHRASE = "PASSPHRASE";
    private static final String TERMINAL_WIDTH = "TERMINAL_WIDTH";
    private static final String CONNECTION_TIMEOUT = "CONNECTION_TIMEOUT";
    private static final String REPLACE = "REPLACE";

    private boolean preformatted = false;
    private boolean ignoreCarriageReturn = false;
    private String sessionClassName;
    private String outputProcessorClassName;
    private String knownHosts;
    private String privateKey;
    private String publicKey;
    private String passphrase;
    private int terminalWidth;
    private int connectionTimeout;
    private List<ReplaceExpression> replaceExpressions = new ArrayList<>();
    private List<Option> otherOptions = new ArrayList<>();

    public static List<Option> of(String optionString) {
        return OptionUtils.splitOptions(optionString).stream()
                .filter(x -> !x.isEmpty())// todo documenta che opzioni con spazio hanno bisogno di virgolette
                .map(Option::of)
                .collect(Collectors.toList());
    }

    public void reset() {
        preformatted = false;
        ignoreCarriageReturn = false;
        sessionClassName = null;
        outputProcessorClassName = null;
        knownHosts = null;
        privateKey = null;
        publicKey = null;
        passphrase = null;
        terminalWidth = 0;
        connectionTimeout = 0;
        replaceExpressions.clear();
        otherOptions.clear();

        String fromProperties = SshClientPlugin.getProperty("ssh.fixture.options");
        if (fromProperties != null)
            add(fromProperties);

    }

    public void reset(String key) {
        switch (key) {
            case PREFORMATTED:
                preformatted = false;
                break;
            case IGNORE_CARRIAGE_RETURN:
                ignoreCarriageReturn = false;
                break;
            case SESSION_CLASS:
                sessionClassName = null;
                break;
            case OUTPUT_PROCESSOR_CLASS:
                outputProcessorClassName = null;
                break;
            case KNOWN_HOSTS:
                knownHosts = null;
                break;
            case PRIVATE_KEY:
                privateKey = null;
                break;
            case PUBLIC_KEY:
                publicKey = null;
                break;
            case PASSPHRASE:
                passphrase = null;
                break;
            case TERMINAL_WIDTH:
                terminalWidth = 0;
                break;
            case CONNECTION_TIMEOUT:
                connectionTimeout = 0;
                break;
            case REPLACE:
                replaceExpressions.clear();
                break;
            default:
                otherOptions.removeAll(otherOptions.stream().filter(o -> o.getKey().equals(key)).collect(Collectors.toList()));
        }

    }

    public void add(String key, String value) {
        add(new Option(key, value));
    }

    private void add(Option option) {
        switch (option.getKey()) {
            case PREFORMATTED:
                preformatted = option.getValue() == null || Boolean.parseBoolean(option.getValue());
                break;
            case IGNORE_CARRIAGE_RETURN:
                ignoreCarriageReturn = option.getValue() == null || Boolean.parseBoolean(option.getValue());
                break;
            case SESSION_CLASS:
                sessionClassName = option.getValue();
                break;
            case OUTPUT_PROCESSOR_CLASS:
                outputProcessorClassName = option.getValue();
                break;
            case KNOWN_HOSTS:
                knownHosts = option.getValue();
                break;
            case PRIVATE_KEY:
                privateKey = option.getValue();
                break;
            case PUBLIC_KEY:
                publicKey = option.getValue();
                break;
            case PASSPHRASE:
                passphrase = option.getValue();
                break;
            case TERMINAL_WIDTH:
                terminalWidth = option.getValue() == null ? 0 : Integer.parseInt(option.getValue());
                break;
            case CONNECTION_TIMEOUT:
                connectionTimeout = option.getValue() == null ? 0 : Integer.parseInt(option.getValue());
                break;
            case REPLACE:
                replaceExpressions.add(ReplaceExpression.of(option.getValue()));
                break;
            default:
                otherOptions.add(option);
        }
    }

    public void overwrite(String options) {
        reset();
        add(options);
    }

    public void add(String options) {
        of(options).forEach(this::add);
    }

    public List<Option> dumpOptions() {
        Options options = this;
        List<Option> list = new ArrayList<>();
        if (options.preformatted) list.add(new Option(PREFORMATTED, null));
        if (options.ignoreCarriageReturn) list.add(new Option(IGNORE_CARRIAGE_RETURN, null));
        if (options.sessionClassName != null) list.add(new Option(SESSION_CLASS, sessionClassName));
        if (options.outputProcessorClassName != null)
            list.add(new Option(OUTPUT_PROCESSOR_CLASS, outputProcessorClassName));
        if (options.knownHosts != null) list.add(new Option(KNOWN_HOSTS, knownHosts));
        if (options.privateKey != null) list.add(new Option(PRIVATE_KEY, privateKey));
        if (options.publicKey != null) list.add(new Option(PUBLIC_KEY, publicKey));
        if (options.passphrase != null) list.add(new Option(PASSPHRASE, passphrase));
        if (options.terminalWidth != 0) list.add(new Option(TERMINAL_WIDTH, terminalWidth + ""));
        if (options.connectionTimeout != 0) list.add(new Option(CONNECTION_TIMEOUT, connectionTimeout + ""));
        list.addAll(options.replaceExpressions.stream().map(x -> new Option(REPLACE, x.toString())).collect(Collectors.toList()));
        list.addAll(options.otherOptions);

        return list;

    }

}
