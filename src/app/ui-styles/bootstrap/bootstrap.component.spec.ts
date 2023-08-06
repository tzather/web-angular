import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsModule } from 'src/controls/controls.module';
import { BootstrapComponent } from './bootstrap.component';

describe('BootstrapComponent', () => {
  let component: BootstrapComponent;
  let fixture: ComponentFixture<BootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapComponent],
      imports: [ControlsModule]
    });
    fixture = TestBed.createComponent(BootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
