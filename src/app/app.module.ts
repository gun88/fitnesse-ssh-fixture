import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {JumbotronComponent} from './component/jumbotron/jumbotron.component';
import {FooterComponent} from './component/footer/footer.component';
import {NotFoundComponent} from './page/common/not-found.component';
import {ReadmeComponent} from './component/readme/readme.component';
import {HttpClientModule} from '@angular/common/http';
import {RecapTableComponent} from './component/recap-table/recap-table.component';
import {FrontPageComponent} from './page/front-page.component';
import {DisabledFunctionComponent} from './page/common/disabled-function.component';
import {PlugInsComponent} from './page/plug-ins.component';
import {UserGuideComponent} from './page/plug-ins/ssh-fixture/user-guide.component';
import {SshFixtureComponent} from './page/plug-ins/ssh-fixture.component';
import {CustomOptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/customization/custom-options.component';
import {CustomOutputProcessorComponent} from './page/plug-ins/ssh-fixture/user-guide/customization/custom-output-processor.component';
import {CustomSessionComponent} from './page/plug-ins/ssh-fixture/user-guide/customization/custom-session.component';
import {KeyPairComponent} from './page/plug-ins/ssh-fixture/user-guide/endpoint-definition/key-pair.component';
import {EndpointKnownHostsComponent} from './page/plug-ins/ssh-fixture/user-guide/endpoint-definition/endpoint-known-hosts.component';
import {VmOptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/endpoint-definition/vm-options.component';
import {AutoExtractionModeComponent} from './page/plug-ins/ssh-fixture/user-guide/installation/auto-extraction-mode.component';
import {ManualModeComponent} from './page/plug-ins/ssh-fixture/user-guide/installation/manual-mode.component';
import {PluginModeComponent} from './page/plug-ins/ssh-fixture/user-guide/installation/plugin-mode.component';
import {DecisionTableComponent} from './page/plug-ins/ssh-fixture/user-guide/options/define-options/decision-table-options.component';
import {DefaultInVmOptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/options/define-options/default-in-vm-options.component';
import {ScenarioTableComponent} from './page/plug-ins/ssh-fixture/user-guide/options/define-options/scenario-table.component';
import {ScriptTableComponent} from './page/plug-ins/ssh-fixture/user-guide/options/define-options/script-table.component';
import {ConnectionTimeoutComponent} from './page/plug-ins/ssh-fixture/user-guide/options/endpoint-options/connection-timeout.component';
import {OptionKnownHostsComponent} from './page/plug-ins/ssh-fixture/user-guide/options/endpoint-options/option-known-hosts.component';
import {PassphraseComponent} from './page/plug-ins/ssh-fixture/user-guide/options/endpoint-options/passphrase.component';
import {PrivateKeyComponent} from './page/plug-ins/ssh-fixture/user-guide/options/endpoint-options/private-key.component';
import {PublicKeyComponent} from './page/plug-ins/ssh-fixture/user-guide/options/endpoint-options/public-key.component';
import {SessionClassComponent} from './page/plug-ins/ssh-fixture/user-guide/options/factory-options/session-class.component';
import {PreformattedOutputComponent} from './page/plug-ins/ssh-fixture/user-guide/options/output-options/preformatted-output.component';
import {ReplaceComponent} from './page/plug-ins/ssh-fixture/user-guide/options/output-options/replace.component';
import {TerminalWidthComponent} from './page/plug-ins/ssh-fixture/user-guide/options/output-options/terminal-width.component';
import {DefineOptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/options/define-options.component';
import {EndpointOptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/options/endpoint-options.component';
import {FactoryOptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/options/factory-options.component';
import {OutputOptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/options/output-options.component';
import {CreateYourFirstTestComponent} from './page/plug-ins/ssh-fixture/user-guide/ssh-test-creation/create-your-first-test.component';
import {ScriptModeComponent} from './page/plug-ins/ssh-fixture/user-guide/ssh-test-creation/script-mode.component';
import {SftpCommandComponent} from './page/plug-ins/ssh-fixture/user-guide/ssh-test-creation/sftp-command.component';
import {UsingScenariosComponent} from './page/plug-ins/ssh-fixture/user-guide/ssh-test-creation/using-scenarios.component';
import {CustomizationComponent} from './page/plug-ins/ssh-fixture/user-guide/customization.component';
import {InstallationComponent} from './page/plug-ins/ssh-fixture/user-guide/installation.component';
import {OptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/options.component';
import {SshTestCreationComponent} from './page/plug-ins/ssh-fixture/user-guide/ssh-test-creation.component';
import {PasswordAuthenticationComponent} from './page/plug-ins/ssh-fixture/user-guide/endpoint-definition/password-authentication.component';
import {EndpointPropertiesFileComponent} from './page/plug-ins/ssh-fixture/user-guide/endpoint-definition/endpoint-properties-file.component';
import {DefaultInPropertiesFileComponent} from './page/plug-ins/ssh-fixture/user-guide/options/define-options/default-in-properties-file.component';
import {OutputProcessorClassComponent} from './page/plug-ins/ssh-fixture/user-guide/options/factory-options/output-processor-class.component';
import {IgnoreCarriageReturnComponent} from './page/plug-ins/ssh-fixture/user-guide/options/output-options/ignore-carriage-return.component';
import {DecisionTableModeComponent} from './page/plug-ins/ssh-fixture/user-guide/ssh-test-creation/decision-table-mode.component';
import {EndpointDefinitionComponent} from './page/plug-ins/ssh-fixture/user-guide/endpoint-definition.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    FooterComponent,
    FrontPageComponent,
    NotFoundComponent,
    ReadmeComponent,
    RecapTableComponent,
    UserGuideComponent,
    SshFixtureComponent,
    DisabledFunctionComponent,
    PlugInsComponent,
    CustomOptionsComponent,
    CustomOutputProcessorComponent,
    CustomSessionComponent,
    KeyPairComponent,
    EndpointKnownHostsComponent,
    PasswordAuthenticationComponent,
    EndpointPropertiesFileComponent,
    VmOptionsComponent,
    AutoExtractionModeComponent,
    ManualModeComponent,
    PluginModeComponent,
    DecisionTableComponent,
    DefaultInPropertiesFileComponent,
    DefaultInVmOptionsComponent,
    ScenarioTableComponent,
    ScriptTableComponent,
    ConnectionTimeoutComponent,
    OptionKnownHostsComponent,
    PassphraseComponent,
    PrivateKeyComponent,
    PublicKeyComponent,
    OutputProcessorClassComponent,
    SessionClassComponent,
    IgnoreCarriageReturnComponent,
    PreformattedOutputComponent,
    ReplaceComponent,
    TerminalWidthComponent,
    DefineOptionsComponent,
    EndpointOptionsComponent,
    FactoryOptionsComponent,
    OutputOptionsComponent,
    CreateYourFirstTestComponent,
    DecisionTableModeComponent,
    ScriptModeComponent,
    SftpCommandComponent,
    UsingScenariosComponent,
    CustomizationComponent,
    EndpointOptionsComponent,
    InstallationComponent,
    OptionsComponent,
    SshTestCreationComponent,
    EndpointDefinitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
