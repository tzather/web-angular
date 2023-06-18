import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should create', () => {
      expect(component.tileOrder).toEqual([
        "gauge-dashboard",
        "d3-bar-dashboard",
        "google-bar-dashboard",
        "plotly-bar-dashboard",
        "google-pie-dashboard",
        "google-line-dashboard"
      ]);
      expect(component.tileIndexList).toEqual([]);
      component.ngOnInit();
      expect(component.tileIndexList).toEqual([0, 1, 2, 3, 4, 5]);
    });
  });

  describe('dragstart', () => {
    it('should create', () => {
      jasmine.clock().install();
      component.dragstart({ dataTransfer: new DataTransfer() }, "mykey");
      expect(component.zindex).toEqual(-1);
      jasmine.clock().tick(100);
      expect(component.zindex).toEqual(1);
    });
  });

  describe('dragend', () => {
    it('should create', () => {
      component.dragend();
      expect(component.zindex).toEqual(-1);
    });
  });

  describe('drop', () => {
    it('should create', () => {
      let e = <any>{ dataTransfer: new DataTransfer() };
      e.dataTransfer.setData("previousKey", "gauge-dashboard");
      component.drop(e, 1);
      expect(component.getOrder("gauge-dashboard")).toEqual(0);
    });

    it('should create 2', () => {
      let e = <any>{ dataTransfer: new DataTransfer() };
      e.dataTransfer.setData("previousKey", "plotly-bar-dashboard");
      component.drop(e, 1);
      expect(component.getOrder("plotly-bar-dashboard")).toEqual(1);
    });


  });

  describe('getOrder', () => {
    it('gauge-db should be first', () => {
      expect(component.getOrder("gauge-dashboard")).toEqual(0);
    });
  });
});
