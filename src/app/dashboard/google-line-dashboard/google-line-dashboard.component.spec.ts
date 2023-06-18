import { firstValueFrom, of } from 'rxjs';
import { DashboardService } from 'src/services';
import { GoogleLineDashboardComponent } from './google-line-dashboard.component';

describe('GoogleLineDashboardComponent', () => {
  let component: GoogleLineDashboardComponent;
  let spyDashboardService: any;

  beforeEach(() => {
    spyDashboardService = jasmine.createSpyObj(DashboardService, ["lineChart"])
    component = new GoogleLineDashboardComponent(spyDashboardService);
  });

  describe('ngOnInit', () => {
    it('return array', async () => {
      spyDashboardService.lineChart.and.returnValue(of({ "test-key": "test-value" }));
      component.ngOnInit();
      let data: any = await firstValueFrom(component.data$)
      expect(data).toEqual({ "test-key": "test-value" });
    });
  });
});
