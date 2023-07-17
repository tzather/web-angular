import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBsComponent } from './card-bs.component';

describe('CardBsComponent', () => {
  let component: CardBsComponent;
  let fixture: ComponentFixture<CardBsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBsComponent]
    });
    fixture = TestBed.createComponent(CardBsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
