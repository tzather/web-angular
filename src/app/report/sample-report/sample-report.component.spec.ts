import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleReportComponent } from './sample-report.component';

describe('SampleReportComponent', () => {
  let component: SampleReportComponent;
  let fixture: ComponentFixture<SampleReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleReportComponent]
    });
    fixture = TestBed.createComponent(SampleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
