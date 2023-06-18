import { firstValueFrom, of } from 'rxjs';
import { DashboardService } from 'src/services';
import { GooglePieDashboardComponent } from './google-pie-dashboard.component';

describe('GooglePieDashboardComponent', () => {
  let component: GooglePieDashboardComponent;
  let spyDashboardService: any;

  beforeEach(() => {
    spyDashboardService = jasmine.createSpyObj(DashboardService, ["pieChart"])
    component = new GooglePieDashboardComponent(spyDashboardService);
  });

  describe('ngOnInit', () => {
    it('return array', async () => {
      spyDashboardService.pieChart.and.returnValue(of({ "test-key": "test-value" }));
      component.ngOnInit();
      let data: any = await firstValueFrom(component.data$)
      expect(data).toEqual({ "test-key": "test-value" });
    });
  });
});
