import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  { path: 'charts',
    loadChildren: () => import('./Charts/charts.module').then(m => m.ChartsModule) 
  },
  { path: 'pages',
    loadChildren: () => import('./Pages/pages.module').then(m => m.PagesModule) 
  },
  { path: 'contabilidad',
    loadChildren: () => import('./Pages/contabilidad/contabilidad.module').then(m => m.ContabilidadModule) 
  },
  { path: 'administracion',
    loadChildren: () => import('./Pages/administracion/administracion.module').then(m => m.AdministracionModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }