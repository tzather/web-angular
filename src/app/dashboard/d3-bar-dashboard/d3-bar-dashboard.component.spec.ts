import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { firstValueFrom, of } from 'rxjs';
import { ControlsModule } from 'src/controls/controls.module';
import { D3BarDashboardComponent } from './d3-bar-dashboard.component';

describe('D3BarDashboardComponent', () => {
  let component: D3BarDashboardComponent;
  let fixture: ComponentFixture<D3BarDashboardComponent>;
  let el: DebugElement;
  const spyDashboardService: any = jasmine.createSpyObj("DashboardService", ["barChart"])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [D3BarDashboardComponent],
      imports: [ControlsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(D3BarDashboardComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('return array', async () => {
      spyDashboardService.barChart.and.returnValue(of({ "test-key": "test-value" }));
      component = new D3BarDashboardComponent(spyDashboardService);
      component.ngOnInit();
      let data: any = await firstValueFrom(component.data$)
      expect(data).toEqual({ "test-key": "test-value" });
    });
  });

  describe('UI', () => {
    it('header label should be "Bar Chart using d3"', () => {
      const header = el.query(By.css("header"));
      expect(header.nativeElement.textContent).toBe("Bar Chart using d3");
    });
  });
});
