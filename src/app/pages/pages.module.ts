// Modulos de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

// Componentes
import { MgaMainComponent } from './mga-main/mga-main.component';
import { PagesComponent } from './pages.component';

// Ng-Prime Components
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ConsultaComponent } from './auditoria/consulta/consulta.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    // Aqui se agregan los componentes de las paginas creadas
    PagesComponent,
    ConsultaComponent,
    MgaMainComponent
  ],
  exports: [
    // Aqui se agregan los componentes de las paginas creadas
    PagesComponent,
    ConsultaComponent,
    MgaMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    PipesModule,
    //Modulos de componentes de NGPrime
    TableModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    CardModule,
    ToastModule
  ]
})
export class PagesModule { }
