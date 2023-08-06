import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesModule } from 'src/pipes/pipes.module';
import { ControlsModule } from '../controls.module';
import { ButtonMatComponent } from './button-mat.component';

describe('ButtonMatComponent', () => {
  let component: ButtonMatComponent;
  let fixture: ComponentFixture<ButtonMatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonMatComponent],
      imports: [ControlsModule, PipesModule]
    });
    fixture = TestBed.createComponent(ButtonMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
