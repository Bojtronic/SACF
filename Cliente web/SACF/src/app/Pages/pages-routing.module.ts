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
import { DepositoComponent } from './contabilidad/deposito/deposito.component';
import { TransferenciaComponent } from './contabilidad/transferencia/transferencia.component';
import { AllCuentasComponent } from './contabilidad/all-cuentas/all-cuentas.component';


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
      { path:'deposito', component:DepositoComponent},
      { path:'transferencia', component:TransferenciaComponent},
      { path:'allcuentas', component:AllCuentasComponent}
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
