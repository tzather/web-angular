import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsModule } from 'src/controls/controls.module';
import { VanillaComponent } from './vanilla.component';

describe('VanillaComponent', () => {
  let component: VanillaComponent;
  let fixture: ComponentFixture<VanillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VanillaComponent],
      imports: [ControlsModule]
    });
    fixture = TestBed.createComponent(VanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
