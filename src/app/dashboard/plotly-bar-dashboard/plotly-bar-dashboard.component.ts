import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardService } from 'src/services';

@Component({
  selector: 'plotly-bar-dashboard',
  templateUrl: './plotly-bar-dashboard.component.html',
  styleUrls: ['./plotly-bar-dashboard.component.scss']
})
export class PlotlyBarDashboardComponent implements OnInit {
  public data$: Observable<any[]> = of([]);
  public dataOptions: any = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dataOptions = [{ "color": "blue" }];
    this.data$ = this.dashboardService.barChart();
  }
}
