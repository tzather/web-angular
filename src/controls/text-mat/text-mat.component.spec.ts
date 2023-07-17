import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMatComponent } from './text-mat.component';

describe('TextMatComponent', () => {
  let component: TextMatComponent;
  let fixture: ComponentFixture<TextMatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextMatComponent]
    });
    fixture = TestBed.createComponent(TextMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
