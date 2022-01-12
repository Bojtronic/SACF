import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  { path: 'charts',
    loadChildren: () => import('./Charts/charts.module').then(m => m.ChartsModule) 
  },
  { path: 'pages',
    loadChildren: () => import('./Pages/pages.module').then(m => m.PagesModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }