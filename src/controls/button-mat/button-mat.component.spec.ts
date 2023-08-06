import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMatComponent } from './button-mat.component';

describe('ButtonMatComponent', () => {
  let component: ButtonMatComponent;
  let fixture: ComponentFixture<ButtonMatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonMatComponent]
    });
    fixture = TestBed.createComponent(ButtonMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
