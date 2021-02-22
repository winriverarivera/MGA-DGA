import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MgaMainComponent } from './mga-main/mga-main.component';



const childRoutes: Routes = [
  { path: '', component: MgaMainComponent },
]


@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
