import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { ChartsModule } from './Charts/charts.module';
import { PagesModule } from './Pages/pages.module';
import { ServicesModule } from './Services/services.module';
import { ContabilidadModule } from './Pages/contabilidad/contabilidad.module';
import { AdministracionModule } from './Pages/administracion/administracion.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
//import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    //Observable,
    ChartsModule,
    PagesModule,
    ContabilidadModule,
    AdministracionModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
