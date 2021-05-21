import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ssh-fixture',
  template: `
    <article>
      <div class="contents">
        <b>Contents:</b>
        <ul class="toc1">
          <li>
            <a href="PlugIns.SshFixture.UserGuide" class="suite">User Guide *</a>
            <ul class="toc2">
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Customization" class="suite">Customization *</a>
                ...
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.EndpointDefinition" class="suite">Endpoint Definition *</a>
                ...
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Installation" class="static">Installation</a>
                ...
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.Options" class="suite">Options *</a>
                ...
              </li>
              <li>
                <a href="PlugIns.SshFixture.UserGuide.SshTestCreation" class="suite">Ssh Test Creation *</a>
                ...
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </article>
  `
})
export class SshFixtureComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
