import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PagesRoutingModule } from './pages-routing.module';
import { ChartsModule } from '../Charts/charts.module';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

import { NewAsientoComponent } from './contabilidad/new-asiento/new-asiento.component';
import { AllAsientosComponent } from './contabilidad/all-asientos/all-asientos.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { FormAsientoComponent } from './contabilidad/form-asiento/form-asiento.component';
import { EdiTableComponent } from './contabilidad/edi-table/edi-table.component';
import { NewDepositoComponent } from './contabilidad/new-deposito/new-deposito.component';
import { NewTransferenciaComponent } from './contabilidad/new-transferencia/new-transferencia.component';
import { AllCuentasComponent } from './contabilidad/all-cuentas/all-cuentas.component';
import { CuentasXCobrarComponent } from './contabilidad/cuentas-x-cobrar/cuentas-x-cobrar.component';
import { NewCuentaComponent } from './contabilidad/new-cuenta/new-cuenta.component';
import { AllDepositosComponent } from './contabilidad/all-depositos/all-depositos.component';
import { AllTransferenciasComponent } from './contabilidad/all-transferencias/all-transferencias.component';
import { CuentasXPagarComponent } from './contabilidad/cuentas-x-pagar/cuentas-x-pagar.component';
import { NewConciliacionComponent } from './contabilidad/new-conciliacion/new-conciliacion.component';
import { AllConciliacionesComponent } from './contabilidad/all-conciliaciones/all-conciliaciones.component';
import { InventariosComponent } from './contabilidad/inventarios/inventarios.component';
import { ReportesComponent } from './contabilidad/reportes/reportes.component';





@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    NewAsientoComponent,
    AllAsientosComponent,
    HeaderComponent,
    FooterComponent,
    FormAsientoComponent,
    EdiTableComponent,
    NewDepositoComponent,
    NewTransferenciaComponent,
    AllCuentasComponent,
    CuentasXCobrarComponent,
    NewCuentaComponent,
    AllDepositosComponent,
    AllTransferenciasComponent,
    CuentasXPagarComponent,
    NewConciliacionComponent,
    AllConciliacionesComponent,
    InventariosComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ChartsModule,
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
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatExpansionModule
  ],
  exports: [
    LoginComponent,
    DashboardComponent,
    NewAsientoComponent,
    AllAsientosComponent,
    HeaderComponent,
    FooterComponent,
    FormAsientoComponent,
    EdiTableComponent,
    NewDepositoComponent,
    NewTransferenciaComponent,
    AllCuentasComponent,
    CuentasXCobrarComponent,
    NewCuentaComponent,
    AllTransferenciasComponent,
    CuentasXPagarComponent,
    NewConciliacionComponent,
    AllConciliacionesComponent,
    InventariosComponent,
    ReportesComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class PagesModule { }
