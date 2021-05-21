import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './page/common/not-found.component';
import {PlugInsComponent} from './page/plug-ins.component';
import {FrontPageComponent} from './page/front-page.component';
import {DisabledFunctionComponent} from './page/common/disabled-function.component';
import {SshFixtureComponent} from './page/plug-ins/ssh-fixture.component';
import {UserGuideComponent} from './page/plug-ins/ssh-fixture/user-guide.component';
import {CustomOptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/customization/custom-options.component';
import {CustomOutputProcessorComponent} from './page/plug-ins/ssh-fixture/user-guide/customization/custom-output-processor.component';
import {CustomSessionComponent} from './page/plug-ins/ssh-fixture/user-guide/customization/custom-session.component';
import {KeyPairComponent} from './page/plug-ins/ssh-fixture/user-guide/endpoint-definition/key-pair.component';
import {EndpointKnownHostsComponent} from './page/plug-ins/ssh-fixture/user-guide/endpoint-definition/endpoint-known-hosts.component';
import {PasswordAuthenticationComponent} from './page/plug-ins/ssh-fixture/user-guide/endpoint-definition/password-authentication.component';
import {EndpointPropertiesFileComponent} from './page/plug-ins/ssh-fixture/user-guide/endpoint-definition/endpoint-properties-file.component';
import {VmOptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/endpoint-definition/vm-options.component';
import {AutoExtractionModeComponent} from './page/plug-ins/ssh-fixture/user-guide/installation/auto-extraction-mode.component';
import {ManualModeComponent} from './page/plug-ins/ssh-fixture/user-guide/installation/manual-mode.component';
import {PluginModeComponent} from './page/plug-ins/ssh-fixture/user-guide/installation/plugin-mode.component';
import {DecisionTableComponent} from './page/plug-ins/ssh-fixture/user-guide/options/define-options/decision-table-options.component';
import {DefaultInPropertiesFileComponent} from './page/plug-ins/ssh-fixture/user-guide/options/define-options/default-in-properties-file.component';
import {DefaultInVmOptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/options/define-options/default-in-vm-options.component';
import {ScenarioTableComponent} from './page/plug-ins/ssh-fixture/user-guide/options/define-options/scenario-table.component';
import {ScriptTableComponent} from './page/plug-ins/ssh-fixture/user-guide/options/define-options/script-table.component';
import {ConnectionTimeoutComponent} from './page/plug-ins/ssh-fixture/user-guide/options/endpoint-options/connection-timeout.component';
import {OptionKnownHostsComponent} from './page/plug-ins/ssh-fixture/user-guide/options/endpoint-options/option-known-hosts.component';
import {PassphraseComponent} from './page/plug-ins/ssh-fixture/user-guide/options/endpoint-options/passphrase.component';
import {PrivateKeyComponent} from './page/plug-ins/ssh-fixture/user-guide/options/endpoint-options/private-key.component';
import {PublicKeyComponent} from './page/plug-ins/ssh-fixture/user-guide/options/endpoint-options/public-key.component';
import {OutputProcessorClassComponent} from './page/plug-ins/ssh-fixture/user-guide/options/factory-options/output-processor-class.component';
import {SessionClassComponent} from './page/plug-ins/ssh-fixture/user-guide/options/factory-options/session-class.component';
import {IgnoreCarriageReturnComponent} from './page/plug-ins/ssh-fixture/user-guide/options/output-options/ignore-carriage-return.component';
import {PreformattedOutputComponent} from './page/plug-ins/ssh-fixture/user-guide/options/output-options/preformatted-output.component';
import {ReplaceComponent} from './page/plug-ins/ssh-fixture/user-guide/options/output-options/replace.component';
import {TerminalWidthComponent} from './page/plug-ins/ssh-fixture/user-guide/options/output-options/terminal-width.component';
import {DefineOptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/options/define-options.component';
import {EndpointOptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/options/endpoint-options.component';
import {FactoryOptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/options/factory-options.component';
import {OutputOptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/options/output-options.component';
import {CreateYourFirstTestComponent} from './page/plug-ins/ssh-fixture/user-guide/ssh-test-creation/create-your-first-test.component';
import {ScriptModeComponent} from './page/plug-ins/ssh-fixture/user-guide/ssh-test-creation/script-mode.component';
import {UsingScenariosComponent} from './page/plug-ins/ssh-fixture/user-guide/ssh-test-creation/using-scenarios.component';
import {CustomizationComponent} from './page/plug-ins/ssh-fixture/user-guide/customization.component';
import {InstallationComponent} from './page/plug-ins/ssh-fixture/user-guide/installation.component';
import {OptionsComponent} from './page/plug-ins/ssh-fixture/user-guide/options.component';
import {SshTestCreationComponent} from './page/plug-ins/ssh-fixture/user-guide/ssh-test-creation.component';
import {SftpCommandComponent} from './page/plug-ins/ssh-fixture/user-guide/ssh-test-creation/sftp-command.component';
import {DecisionTableModeComponent} from './page/plug-ins/ssh-fixture/user-guide/ssh-test-creation/decision-table-mode.component';
import {EndpointDefinitionComponent} from './page/plug-ins/ssh-fixture/user-guide/endpoint-definition.component';


const routes: Routes = [
  {path: '', redirectTo: '/FrontPage', pathMatch: 'full'},
  {path: 'FrontPage', component: FrontPageComponent},
  {path: 'PlugIns', component: PlugInsComponent},
  {path: 'PlugIns.SshFixture', component: SshFixtureComponent},
  {path: 'PlugIns.SshFixture.UserGuide', component: UserGuideComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Customization', component: CustomizationComponent},
  {path: 'PlugIns.SshFixture.UserGuide.EndpointDefinition', component: EndpointDefinitionComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Installation', component: InstallationComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options', component: OptionsComponent},
  {path: 'PlugIns.SshFixture.UserGuide.SshTestCreation', component: SshTestCreationComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Customization.CustomOptions', component: CustomOptionsComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Customization.CustomOutputProcessor', component: CustomOutputProcessorComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Customization.CustomSession', component: CustomSessionComponent},
  {path: 'PlugIns.SshFixture.UserGuide.EndpointDefinition.KeyPair', component: KeyPairComponent},
  {path: 'PlugIns.SshFixture.UserGuide.EndpointDefinition.KnownHosts', component: EndpointKnownHostsComponent},
  {path: 'PlugIns.SshFixture.UserGuide.EndpointDefinition.PasswordAuthentication', component: PasswordAuthenticationComponent},
  {path: 'PlugIns.SshFixture.UserGuide.EndpointDefinition.PropertiesFile', component: EndpointPropertiesFileComponent},
  {path: 'PlugIns.SshFixture.UserGuide.EndpointDefinition.VmOptions', component: VmOptionsComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Installation.AutoExtractionMode', component: AutoExtractionModeComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Installation.ManualMode', component: ManualModeComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Installation.PluginMode', component: PluginModeComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.DefineOptions.DecisionTable', component: DecisionTableComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.DefineOptions.DefaultInPropertiesFile', component: DefaultInPropertiesFileComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.DefineOptions.DefaultInVmOptions', component: DefaultInVmOptionsComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.DefineOptions.ScenarioTable', component: ScenarioTableComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.DefineOptions.ScriptTable', component: ScriptTableComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.EndpointOptions.ConnectionTimeout', component: ConnectionTimeoutComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.EndpointOptions.KnownHosts', component: OptionKnownHostsComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.EndpointOptions.Passphrase', component: PassphraseComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.EndpointOptions.PrivateKey', component: PrivateKeyComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.EndpointOptions.PublicKey', component: PublicKeyComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.FactoryOptions.OutputProcessorClass', component: OutputProcessorClassComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.FactoryOptions.SessionClass', component: SessionClassComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.OutputOptions.IgnoreCarriageReturn', component: IgnoreCarriageReturnComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.OutputOptions.PreformattedOutput', component: PreformattedOutputComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.OutputOptions.Replace', component: ReplaceComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.OutputOptions.TerminalWidth', component: TerminalWidthComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.DefineOptions', component: DefineOptionsComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.EndpointOptions', component: EndpointOptionsComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.FactoryOptions', component: FactoryOptionsComponent},
  {path: 'PlugIns.SshFixture.UserGuide.Options.OutputOptions', component: OutputOptionsComponent},
  {path: 'PlugIns.SshFixture.UserGuide.SshTestCreation.CreateYourFirstTest', component: CreateYourFirstTestComponent},
  {path: 'PlugIns.SshFixture.UserGuide.SshTestCreation.DecisionTableMode', component: DecisionTableModeComponent},
  {path: 'PlugIns.SshFixture.UserGuide.SshTestCreation.ScriptMode', component: ScriptModeComponent},
  {path: 'PlugIns.SshFixture.UserGuide.SshTestCreation.SftpCommand', component: SftpCommandComponent},
  {path: 'PlugIns.SshFixture.UserGuide.SshTestCreation.UsingScenarios', component: UsingScenariosComponent},
  {path: 'EditPage', component: DisabledFunctionComponent},
  {path: 'AddPage', component: DisabledFunctionComponent},
  {path: 'RefactorPage', component: DisabledFunctionComponent},
  {path: 'DeletePage', component: DisabledFunctionComponent},
  {path: 'properties', component: DisabledFunctionComponent},
  {path: 'whereUsed', component: DisabledFunctionComponent},
  {path: 'versions', component: DisabledFunctionComponent},
  {path: 'search', component: DisabledFunctionComponent},
  {path: 'files', component: DisabledFunctionComponent},
  {path: 'ExecutionPage', component: DisabledFunctionComponent},

  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
