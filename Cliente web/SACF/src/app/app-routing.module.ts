import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './Charts/line-chart/line-chart.component';
import { BarChartComponent } from './Charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './Charts/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './Charts/radar-chart/radar-chart.component';
import { PolarAreaChartComponent } from './Charts/polar-area-chart/polar-area-chart.component';
import { BubbleChartComponent } from './Charts/bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './Charts/scatter-chart/scatter-chart.component';
import { DynamicChartComponent } from './Charts/dynamic-chart/dynamic-chart.component';
import { FinancialChartComponent } from './Charts/financial-chart/financial-chart.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'radarchart', pathMatch:'full'}, //componente inicial (se redirecciona al login)
  { path:'radarchart', component:LoginComponent}, //se idica la ruta para llegar o utilizar un componente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//se exportan los componentes para que se puedan redireccionar
export const routingComponents=[DashboardComponent, PieChartComponent, LineChartComponent, BarChartComponent,
  DoughnutChartComponent, RadarChartComponent, PolarAreaChartComponent, BubbleChartComponent, ScatterChartComponent,
  DynamicChartComponent, FinancialChartComponent, LoginComponent]