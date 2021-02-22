import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

// Componentes
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

// Componentes NG Prime
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    ButtonModule,
    TableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
