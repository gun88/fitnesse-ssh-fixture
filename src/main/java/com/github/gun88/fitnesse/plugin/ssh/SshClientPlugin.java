package com.github.gun88.fitnesse.plugin.ssh;

import com.github.gun88.fitnesse.fixture.ssh.SshClient;
import com.jcraft.jsch.JSch;
import fitnesse.FitNesseContext;
import fitnesse.plugins.PluginException;
import fitnesse.plugins.PluginFeatureFactory;
import fitnesse.testrunner.run.TestRunFactoryRegistry;
import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.io.IOException;
import java.util.ResourceBundle;

import static com.github.gun88.fitnesse.plugin.ssh.SshClientPluginUtils.*;
import static java.util.ResourceBundle.getBundle;

@Slf4j
public class SshClientPlugin implements PluginFeatureFactory {

    private static final String BUNDLE_NAME = "ssh-fixture-internal";
    private static final String ARTIFACT_ID_KEY = "artifactId";
    private static final String VERSION_KEY = "version";
    private static final String MAIN_WIKI_FILE = "SshFixture.wiki";

    static File sshClientCodeSourceLocation = getCodeSourceLocation(SshClient.class);
    static FitNesseContext context;

    public static String getProperty(String key) {
        if (context != null && context.getProperties() != null)
            return context.getProperty(key);
        return System.getProperty(key);

    }

    public static void main(String... args) throws IOException {
        if (args.length != 1)
            throw new RuntimeException("Expected 1 argument: FitNesseRoot path");

        if (SshClientPluginUtils.isJar(sshClientCodeSourceLocation)) {
            if (updateFiles(args[0])) {
                String jschVersion = getBundle(BUNDLE_NAME).getString("jsch.version");
                String jschJarPath = new File(sshClientCodeSourceLocation.getParentFile(), ("jsch-" + jschVersion + ".jar")).getAbsolutePath();
                replaceInFile(args[0], MAIN_WIKI_FILE, "jsch.jar.path", jschJarPath);
                replaceInFile(args[0], MAIN_WIKI_FILE, "sshFixture.jar.path", sshClientCodeSourceLocation.getAbsolutePath());
            }
        } else {
            log.info("Update disabled in classes mode");
        }

    }

    private static boolean updateFiles(String rootPagePath) throws IOException {
        ResourceBundle bundle = getBundle(BUNDLE_NAME);
        File codeSourceLocation = sshClientCodeSourceLocation;
        return SshClientUpdater.builder()
                .artifactId(bundle.getString(ARTIFACT_ID_KEY))
                .version(bundle.getString(VERSION_KEY))
                .rootPagePath(rootPagePath)
                .codeSourceLocation(codeSourceLocation)
                .classLoader(SshClient.class.getClassLoader())
                .mainWikiFile(MAIN_WIKI_FILE)
                .build()
                .updateFiles();
    }

    @Override
    public void registerTestRunFactories(TestRunFactoryRegistry registry) throws PluginException {
        try {
            context = registry.getContext();
            if (!isOmittingUpdates(context)) {
                updateFiles(context.getRootPagePath());
            }
            if (SshClientPluginUtils.isJar(sshClientCodeSourceLocation)) {
                String jschVersion = getBundle(BUNDLE_NAME).getString("jsch.version");
                String jschJarPath = new File(sshClientCodeSourceLocation.getParentFile(), ("jsch-" + jschVersion + ".jar")).getAbsolutePath();
                context.getProperties().setProperty("jsch.jar.path", jschJarPath);
                context.getProperties().setProperty("sshFixture.jar.path", sshClientCodeSourceLocation.getAbsolutePath());
            } else {
                context.getProperties().setProperty("jsch.jar.path", getCodeSourceLocation(JSch.class).getPath());
                context.getProperties().setProperty("sshFixture.jar.path", getCodeSourceLocation(SshClient.class).getPath());
            }

        } catch (Exception e) {
            throw new PluginException("SshClientPluginException", e);
        }
    }

}
