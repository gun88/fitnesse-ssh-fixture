package com.github.gun88.fitnesse.fixture.ssh.session;

import com.github.gun88.fitnesse.fixture.ssh.endpoint.Endpoint;
import com.github.gun88.fitnesse.fixture.ssh.option.Option;
import com.github.gun88.fitnesse.fixture.ssh.option.Options;
import com.github.gun88.fitnesse.fixture.ssh.result.ExecutionResult;
import com.github.gun88.fitnesse.fixture.ssh.util.SshClientUtils;
import lombok.AllArgsConstructor;

import java.io.IOException;
import java.io.StringWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class DummySession implements SshSession {

    final Map<String, StringWriter> streams = new HashMap<>();
    private Endpoint endpoint;
    private Options options;
    private boolean connectionOpen;

    @Override
    public void open(Endpoint endpoint, Options options) throws IOException {
        if (connectionOpen)
            throw new IOException("Connection already opened");
        this.endpoint = endpoint;
        this.options = options;
        this.connectionOpen = true;
    }

    @Override
    public void close() throws IOException {
        if (!connectionOpen)
            throw new IOException("Connection already closed");
        this.connectionOpen = false;
    }

    @Override
    public ExecutionResult execute(String command) throws IOException {
        if (!connectionOpen)
            throw new IOException("Connection closed");

        resetWriter("1");
        resetWriter("2");

        List<DummySession.Command> commands = SshClientUtils.splitQuoted(command, ';')
                .stream()
                .map(String::trim)
                .filter(string -> !string.isEmpty())
                .map(this::createCommand)
                .collect(Collectors.toList());


        int exitCode = commands.stream().mapToInt(this::execute).reduce((a, b) -> b).orElse(0);


        ExecutionResult result = new ExecutionResult();
        result.setOutput(streams.get("1").toString());
        result.setError(streams.get("2").toString());
        result.setExitCode(exitCode);

        return result;
    }

    @Override
    public ExecutionResult download(String source, String destination) throws IOException {
        if (!connectionOpen)
            throw new IOException("Connection closed");

        ExecutionResult result = new ExecutionResult();
        if (this.streams.containsKey(source)) {
            Files.write(Paths.get(destination), streams.get(source).toString().getBytes());
            result.setOutput("Downloaded at: " + destination);
            result.setExitCode(0);
        } else {
            result.setError("No such file");
            result.setExitCode(1);
        }
        return result;
    }

    @Override
    public ExecutionResult upload(String source, String destination) throws IOException {
        if (!connectionOpen)
            throw new IOException("Connection closed");


        ExecutionResult result = new ExecutionResult();
        if (Paths.get(source).toFile().exists()) {
            StringWriter stringWriter = streams.computeIfAbsent(destination, x -> new StringWriter());
            stringWriter.append(new String(Files.readAllBytes(Paths.get(source))));
            result.setOutput("Uploaded at: " + destination);
            result.setExitCode(0);
        } else {
            result.setError("No such file");
            result.setExitCode(1);
        }
        return result;
    }

    private void resetWriter(String key) throws IOException {
        StringWriter old = this.streams.put(key, new StringWriter());
        if (old != null)
            old.close();
    }


    private int execute(Command command) {
        DummyStreams streams;
        try {
            streams = buildStreams(command.streamParameter);
        } catch (Exception e) {
            this.streams.get("2").append(e.getMessage());
            return 1;
        }
        try {
            switch (command.name.toLowerCase()) {
                case "echo":
                    return echo(command.parameters, streams);
                case "exit":
                    return exit(command.parameters, streams);
                case "dump-endpoint":
                    return dumpEndpoint(command.parameters, streams);
                case "cat":
                    return cat(command.parameters, streams);
                case "rm":
                    return rm(command.parameters);
                case "dump-options":
                    return dumpOptions(command.parameters, streams);
                default:
                    return unknownCommand(command.name, streams);
            }
        } catch (Exception e) {
            streams.err.append(e.getMessage());
            return 1;
        }
    }

    @SuppressWarnings("SameReturnValue")
    private int dumpEndpoint(List<String> parameters, DummyStreams streams) {
        List<String> options = extractOptions(parameters);
        parameters.removeAll(options);

        streams.out.append(parameters.isEmpty() ? endpoint.toString() : parameters.stream()
                .map(this::fromEndpoint)
                .collect(Collectors.joining(" ")));
        return 0;
    }

    private String fromEndpoint(String part) {
        switch (part) {
            case "username":
                return endpoint.getUsername();
            case "password":
                return endpoint.getPassword();
            case "host":
                return endpoint.getHost();
            case "port":
                return String.valueOf(endpoint.getPort());
            default:
                return "unknown part: " + part;
        }
    }

    @SuppressWarnings("SameReturnValue")
    private int dumpOptions(List<String> parameters, DummyStreams streams) {
        List<String> options = extractOptions(parameters);
        parameters.removeAll(options);

        List<Option> optionList = this.options.dumpOptions();
        if (!parameters.isEmpty())
            optionList = optionList.stream()
                    .filter(x -> parameters.contains(x.getKey()))
                    .collect(Collectors.toList());

        streams.out.append(optionList.stream()
                .map(Option::toString)
                .collect(Collectors.joining(" ")));
        return 0;
    }

    @SuppressWarnings("SameReturnValue")
    private int cat(List<String> parameters, DummyStreams streams) {
        parameters.stream()
                .filter(this.streams::containsKey)
                .map(this.streams::get)
                .map(StringWriter::toString)
                .forEach(streams.out::append);
        return 0;
    }

    @SuppressWarnings("SameReturnValue")
    private int rm(List<String> parameters) {
        parameters.stream()
                .filter(this.streams::containsKey)
                .forEach(this.streams::remove);
        return 0;
    }

    @SuppressWarnings("SameReturnValue")
    private int unknownCommand(String name, DummyStreams streams) {
        streams.err.append("Command '").append(name).append("' not found");
        return 127;
    }

    private int exit(List<String> parameters, DummyStreams streams) {
        if (parameters.size() != 1) {
            streams.err.append("too many arguments");
            return 1;
        }
        try {
            return Integer.parseInt(parameters.get(0));
        } catch (NumberFormatException e) {
            throw new RuntimeException("can not parse: " + parameters.get(0));
        }
    }

    @SuppressWarnings("SameReturnValue")
    private int echo(List<String> parameters, DummyStreams streams) {
        List<String> options = extractOptions(parameters);
        parameters.removeAll(options);
        String out = parameters.stream()
                .map(x -> x.startsWith("\"") && x.endsWith("\"") ? x.substring(1, x.length() - 1) : x)
                .collect(Collectors.joining(" "));
        if (options.contains("-e")) {
            out = out.replace("\\r", "\r");
        }
        streams.out.append(out);

        if (!streams.out.equals(this.streams.get("1")) && !streams.out.equals(this.streams.get("2"))) {
            streams.out.append("\n");
        }
        return 0;
    }

    private DummyStreams buildStreams(String streamParameter) throws Exception {
        String outKey = "1";
        String errKey = "2";
        if (streamParameter == null)
            return new DummyStreams(streams.get(outKey), streams.get(errKey));

        String[] split = streamParameter.split(">");

        if (split.length < 2)
            throw new Exception("syntax error");

        String from = split[0].trim().length() == 0 ? "1" : split[0];
        String to = split[1].replaceFirst("&", "").trim();

        outKey = outKey.replace(from, to);
        errKey = errKey.replace(from, to);

        StringWriter out = toStringWriter(outKey);
        StringWriter err = toStringWriter(errKey);

        return new DummyStreams(out, err);
    }

    private StringWriter toStringWriter(String key) {
        StringWriter out;
        if (Arrays.asList("1", "2").contains(key)) {
            out = streams.computeIfAbsent(key, x -> new StringWriter());
        } else {
            out = new StringWriter();
            streams.put(key, out);
        }
        return out;
    }

    private List<String> extractOptions(List<String> parameters) {
        return parameters.stream()
                .filter(x -> x.matches("-\\w+") || x.matches("--\\w+"))
                .collect(Collectors.toList());
    }

    private Command createCommand(String string) {
        String name = string.split("\\s+")[0];
        string = string.substring(name.length()).trim();
        List<String> parameters = SshClientUtils.splitQuoted(string, ' ').stream()
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .collect(Collectors.toList());

        String streamParameter = null;
        String last = parameters.isEmpty() ? "" : parameters.get(parameters.size() - 1);
        if (!last.contains("\"") && last.contains(">"))
            streamParameter = parameters.remove(parameters.size() - 1);

        return new Command(name, parameters, streamParameter);
    }


    @AllArgsConstructor
    private class Command {
        private final String name;
        private final List<String> parameters;
        private final String streamParameter;

    }

    @AllArgsConstructor
    private class DummyStreams {
        private final StringWriter out;
        private final StringWriter err;
    }

}
