import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardService } from 'src/services';

@Component({
  selector: 'google-pie-dashboard',
  templateUrl: './google-pie-dashboard.component.html',
  styleUrls: ['./google-pie-dashboard.component.scss']
})
export class GooglePieDashboardComponent implements OnInit {
  public data$: Observable<any[]> = of([]);

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.data$ = this.dashboardService.pieChart();
  }
}
