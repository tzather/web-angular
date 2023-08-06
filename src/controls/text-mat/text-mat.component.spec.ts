import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ControlsModule } from '../controls.module';
import { TextMatComponent } from './text-mat.component';

describe('TextMatComponent', () => {
  let component: TextMatComponent;
  let fixture: ComponentFixture<TextMatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextMatComponent],
      imports: [ControlsModule, NoopAnimationsModule]
    });
    fixture = TestBed.createComponent(TextMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
