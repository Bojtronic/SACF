import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';

import { PieChartComponent } from '../../Charts/pie-chart/pie-chart.component';
import { LineChartComponent } from '../../Charts/line-chart/line-chart.component';
import { BarChartComponent } from '../../Charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from '../../Charts/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from '../../Charts/radar-chart/radar-chart.component';
import { PolarAreaChartComponent } from '../../Charts/polar-area-chart/polar-area-chart.component';
import { BubbleChartComponent } from '../../Charts/bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from '../../Charts/scatter-chart/scatter-chart.component';
import { DynamicChartComponent } from '../../Charts/dynamic-chart/dynamic-chart.component';
import { FinancialChartComponent } from '../../Charts/financial-chart/financial-chart.component';


const routes: Routes = [
  {
    path:"",
    component:DashboardComponent,
    children: [
      {
        path:'piechart',
        component:PieChartComponent
      },
      {
        path:'linechart',
        component:LineChartComponent
      } 
    ]
  }
];



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardComponent, 
    PieChartComponent, 
    LineChartComponent, 
    BarChartComponent,
    DoughnutChartComponent, 
    RadarChartComponent, 
    PolarAreaChartComponent, 
    BubbleChartComponent, 
    ScatterChartComponent,
    DynamicChartComponent, 
    FinancialChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ]
})
export class DashboardModule { }