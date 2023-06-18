import { firstValueFrom, of } from 'rxjs';
import { DashboardService } from 'src/services';
import { GoogleBarDashboardComponent } from './google-bar-dashboard.component';

describe('GoogleBarDashboardComponent', () => {
  let component: GoogleBarDashboardComponent;
  let spyDashboardService: any;

  beforeEach(() => {
    spyDashboardService = jasmine.createSpyObj(DashboardService, ["barChart"])
    component = new GoogleBarDashboardComponent(spyDashboardService);
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
