import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from './Charts/charts.module';
import { PagesModule } from './Pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ChartsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
