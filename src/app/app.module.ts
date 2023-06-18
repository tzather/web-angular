import { NgModule, isDevMode } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ServiceWorkerModule } from '@angular/service-worker';

import { ControlsModule } from "src/controls/controls.module";
import { AuthenticationGuard, AuthorizationGuard } from "src/guards";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: IndexComponent,
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthorizationGuard],
    children: [
      {
        path: "dashboard",
        data: { role: "dashboard" },
        loadChildren: () => import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "chart",
        data: { role: "chart" },
        loadChildren: () => import("./chart/chart.module").then((m) => m.ChartModule),
      },
      {
        path: "report",
        data: { role: "report" },
        loadChildren: () => import("./report/report.module").then((m) => m.ReportModule),
      },
      { path: "**", redirectTo: "dashboard" },
    ],
  },
  { path: "**", redirectTo: "login" },
];

@NgModule({
  declarations: [AppComponent, LoginComponent, IndexComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ControlsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // enableTracing: true,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
