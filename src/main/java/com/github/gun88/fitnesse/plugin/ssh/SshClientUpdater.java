package com.github.gun88.fitnesse.plugin.ssh;

import lombok.Builder;
import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.util.AbstractMap;
import java.util.Map;

@Slf4j
@Builder
class SshClientUpdater {

    private static final String FITNESSE_ROOT_DIRNAME = "FitNesseRoot";
    private static final String PLUGINS_DIRNAME = "plugins";
    private static final String RESOURCES_DIRNAME = "Resources";

    private String artifactId;
    private String version;
    private String rootPagePath;
    private File codeSourceLocation;
    private ClassLoader classLoader;
    private String mainWikiFile;

    boolean updateFiles() throws IOException {
        if (sameVersion()) {
            log.debug("No update needed for " + artifactId + "");
            return false;
        }
        log.info("Unpacking new version of " + artifactId + " resources. Please be patient... ");

        String updateList = RESOURCES_DIRNAME + "/" + artifactId + "-updateList";

        SshClientPluginUtils.readAllLinesFromClasspath(classLoader.getResourceAsStream(updateList)).stream()
                .map(this::toInputStreamAndFilePair)
                .peek(this::logFile)
                .forEach(this::inputStreamToFile);

        return true;
    }

    private void logFile(Map.Entry<String, String> stringStringEntry) {
        log.info(stringStringEntry.getValue());
    }

    private Map.Entry<String, String> toInputStreamAndFilePair(String source) {
        String destination = source.replaceFirst(FITNESSE_ROOT_DIRNAME, rootPagePath.replace("\\", "/"))
                .replaceFirst(PLUGINS_DIRNAME, codeSourceLocation.getParentFile().getPath().replace("\\", "/"));
        return new AbstractMap.SimpleEntry<>(RESOURCES_DIRNAME + "/" + source, destination);
    }

    private void inputStreamToFile(Map.Entry<String, String> pair) {
        try (InputStream inputStream = classLoader.getResourceAsStream(pair.getKey())) {
            if (inputStream != null)
                SshClientPluginUtils.copyInputStreamToFile(inputStream, new File(pair.getValue()));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

    private boolean sameVersion() throws IOException {
        Path wikiFilePath = SshClientPluginUtils.toPluginWikiFilePath(rootPagePath, mainWikiFile);
        String filesystemVersion = SshClientPluginUtils.retrieveVersionFromWikiFile(wikiFilePath);
        return version.equals(filesystemVersion);
    }
}
