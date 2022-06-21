import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';


const routes: Routes = [
  {
    path:'',
    children: [
      { path:'login', component:LoginComponent},
      { path:'dashboard', component:DashboardComponent},
      { path:'header', component:HeaderComponent},
      { path:'footer', component:FooterComponent}   
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
