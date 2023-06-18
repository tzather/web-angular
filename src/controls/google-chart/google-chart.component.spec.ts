import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleChartComponent } from './google-chart.component';
declare var google: any;

describe('GoogleChartComponent', () => {
  let component: GoogleChartComponent;
  let fixture: ComponentFixture<GoogleChartComponent>;

  beforeAll(() => {
    (<any>window)["google"] = {
      charts: { setOnLoadCallback: (callback: any) => callback() },
      visualization: {
        DataTable: function () {
          return {
            addColumn: function () { },
            addRow: function () { }
          }
        },
        ColumnChart: function () { return { draw: function () { } } },
        LineChart: function () { return { draw: function () { } } },
        PieChart: function () { return { draw: function () { } } },
      },
    };
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleChartComponent]
    });
    fixture = TestBed.createComponent(GoogleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnChanges', () => {
    it('ngOnChanges is truthy', () => {
      component.type = "bar";
      const spyColumnChart = spyOn(google.visualization, 'ColumnChart').and.callThrough();
      component['googleChart'] = component.displayChart();
      component.ngOnChanges();
      expect(component).toBeTruthy();
    });
    it('ngOnChanges is truthy', () => {
      component.data = <any>[
        ["Name", "Value"],
        ["One", "100"],
        ["Two", "200"]
      ];
      component.ngOnChanges();
      expect(component).toBeTruthy();
    });
  });

  describe('setDataTable', () => {
    it('null data does not call dataTable', () => {
      const spyDataTable = spyOn(google.visualization, 'DataTable').and.callThrough();
      component.setDataTable();
      expect(spyDataTable).not.toHaveBeenCalled();
    });
    it('with data calls dataTable', () => {
      component.data = <any>[
        ["Name", "Value"],
        ["One", "100"],
        ["Two", "200"]
      ]
      const spyDataTable = spyOn(google.visualization, 'DataTable').and.callThrough();
      component.setDataTable();
      expect(spyDataTable).toHaveBeenCalled();
    });
  });

  describe('setOptions', () => {
    it('setting type to "bar" call ColumnChart', () => {
      expect(component['options']).toBeNull();
      component.setOptions();
      expect(component['options']).toBeTruthy();
    });
  });

  describe('displayChart', () => {
    it('setting type to "bar" call ColumnChart', () => {
      component.type = "bar";
      const spyColumnChart = spyOn(google.visualization, 'ColumnChart');
      component.displayChart();
      expect(spyColumnChart).toHaveBeenCalled();
    });
    it('setting type to "line" call ColumnChart', () => {
      component.type = "line";
      const spyColumnChart = spyOn(google.visualization, 'LineChart');
      component.displayChart();
      expect(spyColumnChart).toHaveBeenCalled();
    });
    it('setting type to "pie" call ColumnChart', () => {
      component.type = "pie";
      const spyColumnChart = spyOn(google.visualization, 'PieChart');
      component.displayChart();
      expect(spyColumnChart).toHaveBeenCalled();
    });
    it('no type return null', () => {
      let result = component.displayChart();
      expect(result).toBeNull();
    });
  });
});
