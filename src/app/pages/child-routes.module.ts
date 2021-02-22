import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MgaMainComponent } from './mga-main/mga-main.component';
import { ConsultaComponent } from './auditoria/consulta/consulta.component';

const childRoutes: Routes = [
  { path: '', component: MgaMainComponent },
  { path: 'consulta', component: ConsultaComponent },
]

@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
