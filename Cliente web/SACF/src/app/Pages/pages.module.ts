import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAsientoComponent } from './contabilidad/new-asiento/new-asiento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ChartsModule } from '../Charts/charts.module';

import { AllAsientosComponent } from './contabilidad/all-asientos/all-asientos.component';


import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ChartsRoutingModule } from '../Charts/charts-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    NewAsientoComponent,
    AllAsientosComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ChartsModule,
    ChartsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule,
    MatFormFieldModule
  ]
})
export class PagesModule { }
