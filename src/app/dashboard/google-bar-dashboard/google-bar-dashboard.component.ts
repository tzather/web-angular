import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardService } from 'src/services';

@Component({
  selector: 'google-bar-dashboard',
  templateUrl: './google-bar-dashboard.component.html',
  styleUrls: ['./google-bar-dashboard.component.scss']
})
export class GoogleBarDashboardComponent implements OnInit {
  public data$: Observable<any[]> = of([]);

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.data$ = this.dashboardService.barChart();
  }
}
