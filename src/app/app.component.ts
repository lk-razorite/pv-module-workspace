import { Component, OnInit } from '@angular/core';
import * as clientConfig from '../../clientConfig.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pv-module-workspace';
  ngOnInit(): void {
    console.log(clientConfig);
  }
}
