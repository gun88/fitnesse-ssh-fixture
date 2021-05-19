package com.github.gun88.fitnesse.plugin.ssh;

import fitnesse.ConfigurationParameter;
import fitnesse.FitNesseContext;

import java.io.*;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

class SshClientPluginUtils {
    private static final String VERSION_PREFIX = "!note Release v";
    private static final String JAR_EXTENSION = ".jar";
    private static final String PLUGINS_WIKI_DIRNAME = "PlugIns";

    static File getCodeSourceLocation(Class<?> klass) {
        try {
            return new File(klass.getProtectionDomain().getCodeSource().getLocation().toURI());
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }

    static String retrieveVersionFromWikiFile(Path fromFilesystem) throws IOException {
        return (fromFilesystem.toFile().exists()) ? retrieveVersion(Files.readAllLines(fromFilesystem)) : null;
    }

    private static String retrieveVersion(List<String> strings) {
        return strings.stream()
                .filter(x -> x.startsWith(VERSION_PREFIX))
                .map(x -> x.replace(VERSION_PREFIX, ""))
                .map(String::trim)
                .findFirst()
                .orElse(null);
    }

    static List<String> readAllLinesFromClasspath(InputStream inputStream) throws IOException {
        if (inputStream == null)
            return Collections.emptyList();
        List<String> resultStringBuilder = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new InputStreamReader(inputStream))) {
            String line;
            while ((line = br.readLine()) != null)
                resultStringBuilder.add(line);
        }
        return resultStringBuilder;
    }

    static void copyInputStreamToFile(InputStream inputStream, File destinationFile) throws IOException {
        createParentPath(destinationFile);
        try (FileOutputStream outputStream = new FileOutputStream(destinationFile, false)) {
            int read;
            byte[] bytes = new byte[8192];
            while ((read = inputStream.read(bytes)) != -1) {
                outputStream.write(bytes, 0, read);
            }
        }

    }

    private static void createParentPath(File file) {
        File parentFile = file.getParentFile();
        if (!(parentFile.mkdirs() || parentFile.exists()))
            throw new RuntimeException("Can not create path: " + parentFile);
    }

    static boolean isOmittingUpdates(FitNesseContext context) {
        return "true".equalsIgnoreCase(context.getProperty(ConfigurationParameter.OMITTING_UPDATES.getKey()));
    }

    static boolean isJar(File file) {
        return file.isFile() && file.getPath().endsWith(JAR_EXTENSION);

    }

    @SuppressWarnings("SameParameterValue")
    static void replaceInFile(String rootPagePath, String mainWikiFile, String key, String replace) throws IOException {
        Path path = toPluginWikiFilePath(rootPagePath, mainWikiFile);
        List<String> lines = Files.readAllLines(path).stream()
                .map(line -> line.replace("${" + key + "}", replace))
                .collect(Collectors.toList());
        Files.write(path, lines);
    }

    static Path toPluginWikiFilePath(String rootPagePath, String mainWikiFile) {
        return Paths.get(rootPagePath, PLUGINS_WIKI_DIRNAME, mainWikiFile);
    }
}
