import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

import { NgChartsModule } from 'ng2-charts';
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

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
