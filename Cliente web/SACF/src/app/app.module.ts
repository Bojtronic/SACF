import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { ChartsModule } from './Charts/charts.module';
import { PagesModule } from './Pages/pages.module';
import { ContabilidadModule } from './Pages/contabilidad/contabilidad.module';
import { AdministracionModule } from './Pages/administracion/administracion.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ChartsModule,
    PagesModule,
    ContabilidadModule,
    AdministracionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
