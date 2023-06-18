import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlotlyChartComponent } from './plotly-chart.component';

describe('PlotlyChartComponent', () => {
  let component: PlotlyChartComponent;
  let fixture: ComponentFixture<PlotlyChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlotlyChartComponent]
    });
    fixture = TestBed.createComponent(PlotlyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnChanges', () => {
    it('should create', () => {
      component.data = <any>[
        ["Name", "Value"],
        ["One", "100"],
        ["Two", "200"]
      ];
      component.ngOnChanges();
      expect(component).toBeTruthy();
    });
  });
});
