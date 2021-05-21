# fitnesse-ssh-fixture
FitNesse fixture for SSH and SFTP connections - [![Maven Central](https://img.shields.io/maven-central/v/com.github.gun88/fitnesse-ssh-fixture.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:%22com.github.gun88%22%20AND%20a:%22fitnesse-ssh-fixture%22)

## Table of Contents

- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [Installation](#installation)
- [Running](#running)
- [Build](#build)
- [Releases](#releases)


## Quick Start
1. Download release file: [fitnesse-ssh-fixture-1.0.0.jar](https://github.com/gun88/fitnesse-ssh-fixture/releases/download/v1.0.0/fitnesse-ssh-fixture-1.0.0.jar)
2. Put `fitnesse-ssh-fixture-1.0.0.jar` in the `plugins` directory (or add it to the classpath)
3. Run FitNesse and navigate PlugIns suite to get fitnesse-ssh-fixture UserGuide and Examples

*Note: As shown in [QuickStart](https://gun88.github.io/fitnesse-ssh-fixture/PlugIns.SshFixture.UserGuide) documentation session, the plugin mode installation can be executed just placing 
the fitnesse-ssh-fixture.jar in the FitNesse plugin directory or by making the jar file available 
in the FitNesse web server classpath. When the archive is available in classpath, documentation 
files and dependency libraries are automatically extracted and tuned. To know more about 
other installation methods, go to [Installation](https://gun88.github.io/fitnesse-ssh-fixture/PlugIns.SshFixture.UserGuide.Installation) documentation page*


## Documentation
Documentation is automatically extracted in [plugin mode](https://gun88.github.io/fitnesse-ssh-fixture/PlugIns.SshFixture.UserGuide.Installation.PluginMode) or via [auto-extraction tool](https://gun88.github.io/fitnesse-ssh-fixture/PlugIns.SshFixture.UserGuide.Installation.AutoExtractionMode). Is also 
available online [here](https://gun88.github.io/fitnesse-ssh-fixture/PlugIns.SshFixture.UserGuide).

Check documentation to know more about:
1. [Installation](https://gun88.github.io/fitnesse-ssh-fixture/PlugIns.SshFixture.UserGuide.Installation)
1. [SshTestCreation](https://gun88.github.io/fitnesse-ssh-fixture/PlugIns.SshFixture.UserGuide.SshTestCreation)
1. [EndpointDefinition](https://gun88.github.io/fitnesse-ssh-fixture/PlugIns.SshFixture.UserGuide.EndpointDefinition)
1. [Options](https://gun88.github.io/fitnesse-ssh-fixture/PlugIns.SshFixture.UserGuide.Options)
1. [Customization](https://gun88.github.io/fitnesse-ssh-fixture/PlugIns.SshFixture.UserGuide.Customization)


## Installation
SshFixture can be installed as a plugin or just provided during test executions. The suggested 
installation mode is the [plugin mode](https://gun88.github.io/fitnesse-ssh-fixture/PlugIns.SshFixture.UserGuide.Installation.PluginMode).
More details on installation modes are available [here](https://gun88.github.io/fitnesse-ssh-fixture/PlugIns.SshFixture.UserGuide.Installation)


## Running
Once installed in your FitNesse distribution, start creating your first test. Tests can 
be developed in decision table and script table mode as shown in test creation documentation 
page. The following is a simple test example in table mode.

    |import                               |
    |com.github.gun88.fitnesse.fixture.ssh|

    |ssh client                       |foo/bar@ssh-fitnesse.dev |
    |command                          |output?|error? |exitCode?|
    |echo foo-bar                     |foo-bar|       |0        |
    |echo foo-bar 1>&2                |       |foo-bar|0        |
    |exit 123                         |       |       |123      |
    |echo foo; echo bar 1>&2; exit 234|foo    |bar    |234      |

    !define TEST_SYSTEM {slim}
    !path ${jsch.jar.path}
    !path ${sshFixture.jar.path}

*Note: the `ssh-fitnesse.dev` host is a virtual hosts embedded with 
`fitnesse-ssh-fixture-x.y.z.jar` and emulating a ssh server. If you 
want to make real calls, replace it with an actual ssh server hostname*

*Note: if SshFixture is not installed as a plugin, remember to set or replace 
properties: jsch.jar.path, sshFixture.jar.path; with actual paths*

*Note: In this example the connection was built via username and password, 
that are set in plain text in table header. Click [here](https://gun88.github.io/fitnesse-ssh-fixture/PlugIns.SshFixture.UserGuide.EndpointDefinition) to 
view different authentication and credential storing methods*


## Build
The fitnesse-ssh-fixture build can be executed via Maven.

Produced build will be a jar named `fitnesse-ssh-fixture-x.y.z.jar`, available under `target` directory.

*Note: build version number instead of `x.y.z`*

Execute `mvn clean package` (or `mvn clean verify` to execute integration tests 
or `mvn clean install` to make `fitnesse-ssh-fixture-x.y.z.jar` available in your
local repository)


## Releases
### v1.0.0 (fitnesse-ssh-fixture)
 - [fitnesse-ssh-fixture-1.0.0.jar](https://github.com/gun88/fitnesse-ssh-fixture/releases/download/v1.0.0/fitnesse-ssh-fixture-1.0.0.jar)

