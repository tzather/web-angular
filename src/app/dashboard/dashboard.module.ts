import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ControlsModule } from "src/controls/controls.module";

import { D3BarDashboardComponent } from './d3-bar-dashboard/d3-bar-dashboard.component';
import { GaugeDashboardComponent } from './gauge-dashboard/gauge-dashboard.component';
import { GoogleBarDashboardComponent } from './google-bar-dashboard/google-bar-dashboard.component';
import { GoogleLineDashboardComponent } from "./google-line-dashboard/google-line-dashboard.component";
import { GooglePieDashboardComponent } from './google-pie-dashboard/google-pie-dashboard.component';
import { IndexComponent } from "./index/index.component";
import { PlotlyBarDashboardComponent } from './plotly-bar-dashboard/plotly-bar-dashboard.component';

const routes: Routes = [{ path: "", component: IndexComponent }];

@NgModule({
  declarations: [
    D3BarDashboardComponent,
    GaugeDashboardComponent,
    GoogleBarDashboardComponent,
    GoogleLineDashboardComponent,
    IndexComponent,
    GooglePieDashboardComponent,
    PlotlyBarDashboardComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ControlsModule,
    RouterModule.forChild(routes)
  ],
})
export class DashboardModule { }
