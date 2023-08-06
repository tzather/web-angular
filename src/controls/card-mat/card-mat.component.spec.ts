import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsModule } from '../controls.module';
import { CardMatComponent } from './card-mat.component';

describe('CardMatComponent', () => {
  let component: CardMatComponent;
  let fixture: ComponentFixture<CardMatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMatComponent],
      imports: [ControlsModule]
    });
    fixture = TestBed.createComponent(CardMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
