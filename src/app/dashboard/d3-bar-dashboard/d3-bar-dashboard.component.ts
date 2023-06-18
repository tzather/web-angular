// https://d3-graph-gallery.com/graph/barplot_basic.html

import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardService } from 'src/services';

@Component({
  selector: 'd3-bar-dashboard',
  templateUrl: './d3-bar-dashboard.component.html',
  styleUrls: ['./d3-bar-dashboard.component.scss']
})
export class D3BarDashboardComponent implements OnInit {
  public data$: Observable<any[]> = of([]);
  public dataOptions: any = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dataOptions = [{ "color": "blue" }];
    this.data$ = this.dashboardService.barChart();
  }
}
