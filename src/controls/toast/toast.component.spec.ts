import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ToastService } from "src/services";
import { ToastComponent } from "./toast.component";

describe("ToastComponent", () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("ngOnInit", () => {
    it("should create", () => {
      let toastService = new ToastService()
      component = new ToastComponent(toastService);
      component.ngOnInit();

      // trigger an event
      toastService.error("something")

      expect(component).toBeTruthy();
      expect(component.toastList).toEqual(["something"]);
    });
  });
});
