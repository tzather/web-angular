import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ControlsModule } from 'src/controls/controls.module';
import { DashboardService } from 'src/services';
import { GaugeDashboardComponent } from './gauge-dashboard.component';

describe('GaugeDashboardComponent', () => {
  let component: GaugeDashboardComponent;
  let fixture: ComponentFixture<GaugeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GaugeDashboardComponent],
      imports: [ControlsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GaugeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('null return array', async () => {
      let dashboardService = jasmine.createSpyObj(DashboardService, ["gaugeChart"])
      dashboardService.gaugeChart.and.returnValue(of([{ "group": "a" }, { "group": "b" }]));
      component = new GaugeDashboardComponent(dashboardService);
      component.ngOnInit();
      expect(component.gaugeData).toEqual([{ "group": "a", "color": "red" }, { "group": "b", "color": "red" }]);
      expect(component.groupList).toEqual([{ "id": "a", "name": "a" }, { "id": "b", "name": "b" }]);
      expect(component.selectedGroup).toEqual({ "id": "a", "name": "a" });
    });

    it('null return empty array', async () => {
      let dashboardService = jasmine.createSpyObj(DashboardService, ["gaugeChart"])
      dashboardService.gaugeChart.and.returnValue(of(null)); // = async () => null;
      component = new GaugeDashboardComponent(dashboardService);
      component.ngOnInit();
      expect(component.gaugeData).toEqual([]);
      expect(component.groupList).toEqual([]);
      expect(component.selectedGroup).toEqual({});
    });
  });


  describe('render', () => {
    it('null return empty array', () => {
      (<any>component.gaugeData) = null;
      component.render();
      expect(component.filterData).toEqual([]);
    });
    it('null return empty array', () => {
      component.gaugeData = [];
      component.render();
      expect(component.filterData).toEqual([]);
    });
    it('null return empty array', () => {
      component.gaugeData = [{ "group": "a" }, { "group": "b" }];
      component.selectedGroup = {}
      component.render();
      expect(component.filterData).toEqual([]);
    });
    it('null return empty array', () => {
      component.gaugeData = [{ "group": "a" }, { "group": "b" }];
      component.selectedGroup = { "id": "b" }
      component.render();
      expect(component.filterData).toEqual([{ "group": "b" }]);
    });
  });

  describe('gaugeColor', () => {
    it('null maxValue return no color', () => {
      expect(component.gaugeColor(50, null)).toBe("");
    });
    it('0 maxValue return no color', () => {
      expect(component.gaugeColor(50, 0)).toBe("");
    });
    it('0% return no green', () => {
      expect(component.gaugeColor(0, 100)).toBe("green");
    });
    it('50% return no green', () => {
      expect(component.gaugeColor(50, 100)).toBe("green");
    });
    it('50.1% return no green', () => {
      expect(component.gaugeColor(50.1, 100)).toBe("yellow");
    });
    it('75% return no green', () => {
      expect(component.gaugeColor(75, 100)).toBe("yellow");
    });
    it('75.1% return no green', () => {
      expect(component.gaugeColor(75.1, 100)).toBe("red");
    });
    it('110% return no green', () => {
      expect(component.gaugeColor(110, 100)).toBe("red");
    });
  });

  describe('groupChange', () => {
    beforeEach(() => {
      component.gaugeData = [{ "group": "a" }, { "group": "b" }];
    });

    it('null return empty array', () => {
      component.groupChange(null);
      expect(component.selectedGroup).toBeNull();
      expect(component.filterData).toEqual([]);
    });
    it('set filter data based on passed in value', () => {
      component.groupChange({ "id": "b" });
      expect(component.selectedGroup).toEqual({ "id": "b" });
      expect(component.filterData).toEqual([{ "group": "b" }]);
    });
    it('set filter data based on passed in value', () => {
      component.groupChange({ "id": "not-exist" });
      expect(component.selectedGroup).toEqual({ "id": "not-exist" });
      expect(component.filterData).toEqual([]);
    });
  });
});
