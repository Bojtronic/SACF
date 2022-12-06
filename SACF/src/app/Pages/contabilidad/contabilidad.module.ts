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
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { NewAsientoComponent } from './new-asiento/new-asiento.component';
import { AllAsientosComponent } from './all-asientos/all-asientos.component';
import { FormAsientoComponent } from './form-asiento/form-asiento.component';
import { EdiTableComponent } from './edi-table/edi-table.component';
import { NewDepositoComponent } from './new-deposito/new-deposito.component';
import { NewTransferenciaComponent } from './new-transferencia/new-transferencia.component';
import { AllCuentasComponent } from './all-cuentas/all-cuentas.component';
import { CuentasXCobrarComponent } from './cuentas-x-cobrar/cuentas-x-cobrar.component';
import { NewCuentaComponent } from './new-cuenta/new-cuenta.component';
import { AllDepositosComponent } from './all-depositos/all-depositos.component';
import { AllTransferenciasComponent } from './all-transferencias/all-transferencias.component';
import { CuentasXPagarComponent } from './cuentas-x-pagar/cuentas-x-pagar.component';
import { NewConciliacionComponent } from './new-conciliacion/new-conciliacion.component';
import { AllConciliacionesComponent } from './all-conciliaciones/all-conciliaciones.component';
import { InventariosComponent } from './inventarios/inventarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ContabilidadRoutingModule } from './contabilidad-routing.module';



@NgModule({
  declarations: [
    NewAsientoComponent,
    AllAsientosComponent,
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
    ContabilidadRoutingModule,
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
    MatExpansionModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatAutocompleteModule
  ],
  exports: [
    NewAsientoComponent,
    AllAsientosComponent,
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
})
export class ContabilidadModule { }
