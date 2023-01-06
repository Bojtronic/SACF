import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
import { AuditComponent } from './audit/audit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'newasiento', component: NewAsientoComponent },
      { path: 'allasientos', component: AllAsientosComponent },
      { path: 'formasiento', component: FormAsientoComponent },
      { path: 'editable', component: EdiTableComponent },
      { path: 'newdeposito', component: NewDepositoComponent },
      { path: 'newtransferencia', component: NewTransferenciaComponent },
      { path: 'alltransferencias', component: AllTransferenciasComponent },
      { path: 'allcuentas', component: AllCuentasComponent },
      { path: 'cuentasxcobrar', component: CuentasXCobrarComponent },
      { path: 'cuentasxpagar', component: CuentasXPagarComponent },
      { path: 'newcuenta', component: NewCuentaComponent },
      { path: 'alldepositos', component: AllDepositosComponent },
      { path: 'newconciliacion', component: NewConciliacionComponent },
      { path: 'allconciliaciones', component: AllConciliacionesComponent },
      { path: 'inventarios', component: InventariosComponent },
      { path: 'reportes', component: ReportesComponent },
      { path: 'audit', component: AuditComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class ContabilidadRoutingModule { }
