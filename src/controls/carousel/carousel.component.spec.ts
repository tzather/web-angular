import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnChanges', () => {
    component.data = [1];
    component.ngOnChanges(<any>null);
    expect(component).toBeTruthy();
  });

  it('prev', () => {
    component.prev();
    expect(component).toBeTruthy();
  });
  it('prev', () => {
    component.selectedItem = 2;
    component.data = [1, 2];
    component.prev();
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.next();
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    component.data = [1, 2];
    component.next();
    expect(component).toBeTruthy();
  });
});
