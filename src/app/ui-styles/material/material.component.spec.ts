import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ControlsModule } from 'src/controls/controls.module';
import { MaterialComponent } from './material.component';

describe('MaterialComponent', () => {
  let component: MaterialComponent;
  let fixture: ComponentFixture<MaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialComponent],
      imports: [ControlsModule, NoopAnimationsModule]
    });
    fixture = TestBed.createComponent(MaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
