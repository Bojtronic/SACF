import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//import { NgChartsModule } from 'ng2-charts';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
/*
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
*/
import { LoginComponent } from './Pages/login/login.component';

import { ChartsModule } from './Charts/charts.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent, /*
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PolarAreaChartComponent,
    BubbleChartComponent,
    ScatterChartComponent,
    DynamicChartComponent,
    FinancialChartComponent, */
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // NgChartsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
