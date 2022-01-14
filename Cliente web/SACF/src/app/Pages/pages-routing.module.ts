import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewAsientoComponent } from './contabilidad/new-asiento/new-asiento.component';
import { AllAsientosComponent } from './contabilidad/all-asientos/all-asientos.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { DatepickerComponent } from './contabilidad/datepicker/datepicker.component';

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
      { path:'datepicker', component:DatepickerComponent}
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
