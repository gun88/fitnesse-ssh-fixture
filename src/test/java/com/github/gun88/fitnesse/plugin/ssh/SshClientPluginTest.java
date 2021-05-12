package com.github.gun88.fitnesse.plugin.ssh;

import com.github.gun88.fitnesse.fixture.ssh.SshClient;
import com.jcraft.jsch.JSch;
import fitnesse.ConfigurationParameter;
import fitnesse.FitNesseContext;
import fitnesse.plugins.PluginException;
import fitnesse.testrunner.run.TestRunFactoryRegistry;
import org.junit.Assert;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;
import util.WikiFileUtils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.Properties;

import static com.github.gun88.fitnesse.plugin.ssh.util.SshClientPluginUtils.getCodeSourceLocation;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class SshClientPluginTest {

    @Rule
    public TemporaryFolder temporaryFolder = new TemporaryFolder();

    @Test
    public void getProperty_shouldUseSystemProperties_whenRegisterTestRunFactoriesNotCalled() {
        SshClientPlugin.context = null;
        System.setProperty("my-prop", "123");
        String property = SshClientPlugin.getProperty("my-prop");
        Assert.assertEquals("123", property);
        System.clearProperty("my-prop");
    }

    @Test
    public void getProperty_shouldUseContextProperties_whenRegisterTestRunFactoriesNotCalled() throws PluginException, IOException {
        SshClientPlugin.context = null;
        System.setProperty("my-prop", "000");
        SshClientPlugin sshClientPlugin = new SshClientPlugin();
        FitNesseContext context = mock(FitNesseContext.class);
        when(context.getProperty("my-prop")).thenReturn("456");
        File wiki = temporaryFolder.newFolder("wiki");
        when(context.getRootPagePath()).thenReturn(wiki.getPath());
        when(context.getProperty(ConfigurationParameter.OMITTING_UPDATES.getKey())).thenReturn("true");
        Properties properties = new Properties();
        when(context.getProperties()).thenReturn(properties);
        sshClientPlugin.registerTestRunFactories(new TestRunFactoryRegistry(context));
        String property = SshClientPlugin.getProperty("my-prop");
        Assert.assertEquals("456", property);
        System.clearProperty("my-prop");
    }

    @Test(expected = RuntimeException.class)
    public void main_shouldThrowException_whenNoPathProvided() throws IOException {
        SshClientPlugin.main();
    }

    @Test
    public void main_shouldNotUpdate_whenNoJarDetected() throws IOException {
        File folder = temporaryFolder.newFolder("wiki");
        SshClientPlugin.main(folder.getPath());
        assertEquals(0, Files.list(folder.toPath()).count());
    }

    @Test
    public void main_shouldNotUpdate_whenSameVersionDetected() throws IOException {
        File wiki = temporaryFolder.newFolder("wiki");
        temporaryFolder.newFolder("wiki", "PlugIns");
        File mainWikiFile = temporaryFolder.newFile("wiki/PlugIns/SshFixture.wiki");
        Files.write(mainWikiFile.toPath(), Collections.singletonList("!note Release v0.0.0"));
        File lib = temporaryFolder.newFolder("lib");
        SshClientPlugin.sshClientCodeSourceLocation = temporaryFolder.newFile("lib/fixture.jar");
        SshClientPlugin.main(wiki.getPath());
        assertEquals(1, Files.list(wiki.toPath()).count());
        assertEquals(1, Files.list(lib.toPath()).count());
    }

    @Test
    public void main_shouldUpdate_whenDifferentVersionDetected() throws IOException {
        File wiki = temporaryFolder.newFolder("wiki");
        File plugins = temporaryFolder.newFolder("wiki", "PlugIns");
        File mainWikiFile = temporaryFolder.newFile("wiki/PlugIns/SshFixture.wiki");
        Files.write(mainWikiFile.toPath(), Collections.singletonList("!note Release v0.0.1"));
        File lib = temporaryFolder.newFolder("lib");
        SshClientPlugin.sshClientCodeSourceLocation = temporaryFolder.newFile("lib/fixture-0.0.0.jar");
        SshClientPlugin.main(wiki.getPath());

        assertEquals(2, Files.list(lib.toPath()).count());
        Path mainFixturePath = Paths.get(lib.getAbsolutePath(), "fixture-0.0.0.jar");
        Path dependencyPath = Paths.get(lib.getAbsolutePath(), "jsch-0.0.0.jar");
        assertTrue(Files.exists(mainFixturePath));
        assertTrue(Files.exists(dependencyPath));
        assertEquals(2, Files.list(plugins.toPath()).count());
        assertTrue(Files.exists(Paths.get(plugins.getAbsolutePath(), "SshFixture")));
        assertTrue(Files.isDirectory(Paths.get(plugins.getAbsolutePath(), "SshFixture")));
        assertTrue(WikiFileUtils.contains(mainWikiFile, "!path " + dependencyPath.toAbsolutePath()));
        assertTrue(WikiFileUtils.contains(mainWikiFile, "!path " + mainFixturePath.toAbsolutePath()));
    }

    @Test
    public void main_shouldUpdate_whenNoFileDetected() throws IOException {
        File wiki = temporaryFolder.newFolder("wiki");
        File lib = temporaryFolder.newFolder("lib");
        SshClientPlugin.sshClientCodeSourceLocation = temporaryFolder.newFile("lib/fixture-0.0.0.jar");
        SshClientPlugin.main(wiki.getPath());

        assertEquals(2, Files.list(lib.toPath()).count());
        Path mainFixturePath = Paths.get(lib.getAbsolutePath(), "fixture-0.0.0.jar");
        Path dependencyPath = Paths.get(lib.getAbsolutePath(), "jsch-0.0.0.jar");
        assertTrue(Files.exists(mainFixturePath));
        assertTrue(Files.exists(dependencyPath));
        File plugins = new File(temporaryFolder.getRoot(), "wiki/PlugIns");
        File mainWikiFile = new File(plugins, "SshFixture.wiki");
        assertEquals(2, Files.list(plugins.toPath()).count());
        assertTrue(Files.exists(Paths.get(plugins.getAbsolutePath(), "SshFixture")));
        assertTrue(Files.isDirectory(Paths.get(plugins.getAbsolutePath(), "SshFixture")));
        assertTrue(WikiFileUtils.contains(mainWikiFile, "!path " + dependencyPath.toAbsolutePath()));
        assertTrue(WikiFileUtils.contains(mainWikiFile, "!path " + mainFixturePath.toAbsolutePath()));
    }


    @Test
    public void registerTestRunFactories_shouldNotUpdate_whenOmittingUpdateSet() throws IOException, PluginException {
        File wiki = temporaryFolder.newFolder("wiki");
        FitNesseContext context = mock(FitNesseContext.class);
        when(context.getRootPagePath()).thenReturn(wiki.getPath());
        when(context.getProperty(ConfigurationParameter.OMITTING_UPDATES.getKey())).thenReturn("true");
        Properties properties = new Properties();
        when(context.getProperties()).thenReturn(properties);
        new SshClientPlugin().registerTestRunFactories(new TestRunFactoryRegistry(context));
        assertEquals(0, Files.list(wiki.toPath()).count());
    }

    @Test
    public void registerTestRunFactories_shouldNotUpdate_whenSameVersionDetected() throws IOException, PluginException {
        File wiki = temporaryFolder.newFolder("wiki");
        temporaryFolder.newFolder("wiki", "PlugIns");
        File mainWikiFile = temporaryFolder.newFile("wiki/PlugIns/SshFixture.wiki");
        Files.write(mainWikiFile.toPath(), Collections.singletonList("!note Release v0.0.0"));
        File lib = temporaryFolder.newFolder("lib");
        SshClientPlugin.sshClientCodeSourceLocation = temporaryFolder.newFile("lib/fixture.jar");

        FitNesseContext context = mock(FitNesseContext.class);
        when(context.getRootPagePath()).thenReturn(wiki.getPath());
        Properties properties = new Properties();
        when(context.getProperties()).thenReturn(properties);
        new SshClientPlugin().registerTestRunFactories(new TestRunFactoryRegistry(context));

        assertEquals(1, Files.list(wiki.toPath()).count());
        assertEquals(1, Files.list(lib.toPath()).count());
    }

    @Test
    public void registerTestRunFactories_shouldUpdate_whenDifferentVersionDetected() throws IOException, PluginException {

        File wiki = temporaryFolder.newFolder("wiki");
        File plugins = temporaryFolder.newFolder("wiki", "PlugIns");
        File mainWikiFile = temporaryFolder.newFile("wiki/PlugIns/SshFixture.wiki");
        Files.write(mainWikiFile.toPath(), Collections.singletonList("!note Release v0.0.1"));
        File lib = temporaryFolder.newFolder("lib");
        SshClientPlugin.sshClientCodeSourceLocation = temporaryFolder.newFile("lib/fixture-0.0.0.jar");

        FitNesseContext context = mock(FitNesseContext.class);
        when(context.getRootPagePath()).thenReturn(wiki.getPath());
        Properties properties = new Properties();
        when(context.getProperties()).thenReturn(properties);
        new SshClientPlugin().registerTestRunFactories(new TestRunFactoryRegistry(context));

        assertEquals(2, Files.list(lib.toPath()).count());
        Path mainFixturePath = Paths.get(lib.getAbsolutePath(), "fixture-0.0.0.jar");
        Path dependencyPath = Paths.get(lib.getAbsolutePath(), "jsch-0.0.0.jar");
        assertTrue(Files.exists(mainFixturePath));
        assertTrue(Files.exists(dependencyPath));
        assertEquals(2, Files.list(plugins.toPath()).count());
        assertTrue(Files.exists(Paths.get(plugins.getAbsolutePath(), "SshFixture")));
        assertTrue(Files.isDirectory(Paths.get(plugins.getAbsolutePath(), "SshFixture")));

    }

    @Test
    public void registerTestRunFactories_shouldSetClassesPath_whenNoJarDetected() throws IOException, PluginException {
        File wiki = temporaryFolder.newFolder("wiki");
        FitNesseContext context = mock(FitNesseContext.class);
        when(context.getRootPagePath()).thenReturn(wiki.getPath());
        Properties properties = new Properties();
        when(context.getProperties()).thenReturn(properties);
        new SshClientPlugin().registerTestRunFactories(new TestRunFactoryRegistry(context));

        assertEquals(getCodeSourceLocation(JSch.class).getPath(), properties.getProperty("jsch.jar.path"));
        assertEquals(getCodeSourceLocation(SshClient.class).getPath(), properties.getProperty("sshFixture.jar.path"));
    }


    @Test
    public void registerTestRunFactories_shouldSetJarPath_whenJarDetected() throws IOException, PluginException {
        File wiki = temporaryFolder.newFolder("wiki");
        File lib = temporaryFolder.newFolder("lib");
        SshClientPlugin.sshClientCodeSourceLocation = temporaryFolder.newFile("lib/fixture-0.0.0.jar");
        FitNesseContext context = mock(FitNesseContext.class);
        when(context.getRootPagePath()).thenReturn(wiki.getPath());
        Properties properties = new Properties();
        when(context.getProperties()).thenReturn(properties);
        new SshClientPlugin().registerTestRunFactories(new TestRunFactoryRegistry(context));

        Path mainFixturePath = Paths.get(lib.getAbsolutePath(), "fixture-0.0.0.jar");
        Path dependencyPath = Paths.get(lib.getAbsolutePath(), "jsch-0.0.0.jar");
        assertEquals(dependencyPath.toString(), properties.getProperty("jsch.jar.path"));
        assertEquals(mainFixturePath.toString(), properties.getProperty("sshFixture.jar.path"));
    }


}
