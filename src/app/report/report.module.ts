import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ControlsModule } from 'src/controls/controls.module';
import { SampleReportComponent } from './sample-report/sample-report.component';

const routes: Routes = [
  { path: "sample-report", component: SampleReportComponent },
  { path: "**", component: SampleReportComponent }
];

@NgModule({
  declarations: [
    SampleReportComponent
  ],
  imports: [FormsModule, CommonModule, ControlsModule, RouterModule.forChild(routes)],
})
export class ReportModule { }
