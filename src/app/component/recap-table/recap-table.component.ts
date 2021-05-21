import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-recap-table',
  templateUrl: './recap-table.component.html',
  styleUrls: ['./recap-table.component.scss']
})
export class RecapTableComponent implements OnInit {

  env = environment;

  constructor() {
  }

  ngOnInit() {
  }

}
