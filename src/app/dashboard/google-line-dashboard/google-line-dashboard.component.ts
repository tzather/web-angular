import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardService } from 'src/services';

@Component({
  selector: 'google-line-dashboard',
  templateUrl: './google-line-dashboard.component.html',
  styleUrls: ['./google-line-dashboard.component.scss']
})
export class GoogleLineDashboardComponent implements OnInit {
  public data$: Observable<any[]> = of([]);

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.data$ = this.dashboardService.lineChart();
  }
}
