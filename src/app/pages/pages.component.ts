import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { SettingsService } from '../services/settings.service';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
  providers: [MessageService]
})
export class PagesComponent implements OnInit {

  constructor( private settingsService: SettingsService ) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
