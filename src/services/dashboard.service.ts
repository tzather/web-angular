import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/services';
import { ConfigService } from './config.service';

@Injectable({ providedIn: 'root' })
export class DashboardService {

  constructor(private apiService: ApiService, private configService: ConfigService) { }

  barChart = (): Observable<any> => this.apiService.getCsv(`${this.configService.dashboard}/barChart`, 3000);
  gaugeChart = (): Observable<any> => this.apiService.getJson(`${this.configService.dashboard}/gaugeChart`, 3000);
  lineChart = (): Observable<any> => this.apiService.getCsv(`${this.configService.dashboard}/lineChart`, 3000);
  pieChart = (): Observable<any> => this.apiService.getCsv(`${this.configService.dashboard}/pieChart`, 3000);
}
