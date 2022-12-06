import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    children: [
      //{ path:'page1', component:Page1Component},
      //{ path:'page2', component:Page2Component},
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


export class AdministracionRoutingModule { }
