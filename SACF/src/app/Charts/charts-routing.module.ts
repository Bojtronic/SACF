import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { DynamicChartComponent } from './dynamic-chart/dynamic-chart.component';
import { FinancialChartComponent } from './financial-chart/financial-chart.component';
import { AllChartsComponent } from './all-charts/all-charts.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path:'piechart', component:PieChartComponent},
      { path:'linechart', component:LineChartComponent},
      { path:'barchart', component:BarChartComponent},
      { path:'doughnutchart', component:DoughnutChartComponent},
      { path:'radarchart', component:RadarChartComponent},
      { path:'polarchart', component:PolarAreaChartComponent},
      { path:'bubblechart', component:BubbleChartComponent},
      { path:'scatterchart', component:ScatterChartComponent},
      { path:'dynamicchart', component:DynamicChartComponent},
      { path:'financialchart', component:FinancialChartComponent},
      { path:'allcharts', component:AllChartsComponent}
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
export class ChartsRoutingModule { }
