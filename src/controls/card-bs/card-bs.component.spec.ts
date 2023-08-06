import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsModule } from '../controls.module';
import { CardBsComponent } from './card-bs.component';

describe('CardBsComponent', () => {
  let component: CardBsComponent;
  let fixture: ComponentFixture<CardBsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBsComponent],
      imports: [ControlsModule]
    });
    fixture = TestBed.createComponent(CardBsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
