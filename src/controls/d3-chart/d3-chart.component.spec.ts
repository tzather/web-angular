import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D3ChartComponent } from './d3-chart.component';

describe('D3ChartComponent', () => {
  let component: D3ChartComponent;
  let fixture: ComponentFixture<D3ChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [D3ChartComponent]
    });
    fixture = TestBed.createComponent(D3ChartComponent);
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
