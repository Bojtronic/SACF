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
  {path:'', redirectTo:'login', pathMatch:'full'}, //componente por default (se redirecciona al login)
  { path:'login', component:LoginComponent}, //se indica la ruta al componente (html, scss, typescript)
  { path:'dashboard', component:DashboardComponent},
  { path:'piechart', component:PieChartComponent},
  { path:'linechart', component:LineChartComponent},
  { path:'barchart', component:BarChartComponent},
  { path:'doughnutchart', component:DoughnutChartComponent},
  { path:'radarchart', component:RadarChartComponent},
  { path:'polarareachart', component:PolarAreaChartComponent},
  { path:'bubblechart', component:BubbleChartComponent},
  { path:'scatterchart', component:ScatterChartComponent},
  { path:'dynamicchart', component:DynamicChartComponent},
  { path:'financialchart', component:FinancialChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//se exportan los componentes para que se puedan redireccionar
export const routingComponents=[DashboardComponent, BarChartComponent, PieChartComponent, LineChartComponent,
  DoughnutChartComponent, RadarChartComponent, PolarAreaChartComponent, BubbleChartComponent, ScatterChartComponent,
  DynamicChartComponent, FinancialChartComponent, LoginComponent]
  