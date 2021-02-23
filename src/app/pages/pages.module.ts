import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PipesModule } from '../pipes/pipes.module';

import { PagesComponent } from './pages.component';
import { MgaMainComponent } from './mga-main/mga-main.component';

// Ng-Prime Components
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { ConsultaComponent } from './auditoria/consulta/consulta.component';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    PagesComponent,
    ConsultaComponent,
    MgaMainComponent
  ],
  exports: [
    MgaMainComponent,
    ConsultaComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    PipesModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    CardModule
  ]
})
export class PagesModule { }
