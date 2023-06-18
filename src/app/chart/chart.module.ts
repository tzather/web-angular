import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ControlsModule } from 'src/controls/controls.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [
  { path: "bar-chart", component: BarChartComponent },
  { path: "pie-chart", component: PieChartComponent },
  { path: "**", component: BarChartComponent }
];

@NgModule({
  declarations: [
    BarChartComponent,
    PieChartComponent
  ],
  imports: [FormsModule, CommonModule, ControlsModule, RouterModule.forChild(routes)],
})
export class ChartModule { }
