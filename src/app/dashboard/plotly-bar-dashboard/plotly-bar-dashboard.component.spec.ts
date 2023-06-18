import { firstValueFrom, of } from 'rxjs';
import { DashboardService } from 'src/services';
import { PlotlyBarDashboardComponent } from './plotly-bar-dashboard.component';

describe('PlotlyBarDashboardComponent', () => {
  let component: PlotlyBarDashboardComponent;
  let spyDashboardService: any;

  beforeEach(() => {
    spyDashboardService = jasmine.createSpyObj(DashboardService, ["barChart"])
    component = new PlotlyBarDashboardComponent(spyDashboardService);
  });

  describe('ngOnInit', () => {
    it('return array', async () => {
      spyDashboardService.barChart.and.returnValue(of({ "test-key": "test-value" }));
      component.ngOnInit();
      let data: any = await firstValueFrom(component.data$)
      expect(data).toEqual({ "test-key": "test-value" });
    });
  });
});
