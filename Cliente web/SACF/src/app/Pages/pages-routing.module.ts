import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewAsientoComponent } from './contabilidad/new-asiento/new-asiento.component';
import { AllAsientosComponent } from './contabilidad/all-asientos/all-asientos.component';
import { FormAsientoComponent } from './contabilidad/form-asiento/form-asiento.component'
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
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


const routes: Routes = [
  {
    path:'',
    children: [
      { path:'login', component:LoginComponent},
      { path:'dashboard', component:DashboardComponent},
      { path:'newasiento', component:NewAsientoComponent},
      { path:'allasientos', component:AllAsientosComponent},
      { path:'header', component:HeaderComponent},
      { path:'footer', component:FooterComponent},
      { path:'formasiento', component:FormAsientoComponent},
      { path:'editable', component:EdiTableComponent},
      { path:'newdeposito', component:NewDepositoComponent},
      { path:'newtransferencia', component:NewTransferenciaComponent},
      { path:'alltransferencias', component:AllTransferenciasComponent},
      { path:'allcuentas', component:AllCuentasComponent},
      { path:'cuentasxcobrar', component:CuentasXCobrarComponent},
      { path:'cuentasxpagar', component:CuentasXPagarComponent},
      { path:'newcuenta', component:NewCuentaComponent},
      { path:'alldepositos', component:AllDepositosComponent},
      { path:'newconciliacion', component:NewConciliacionComponent},
      { path:'allconciliaciones', component:AllConciliacionesComponent},
      { path:'inventarios', component:InventariosComponent},
      { path:'reportes', component:ReportesComponent}
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

export class PagesRoutingModule { }
