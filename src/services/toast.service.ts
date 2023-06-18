import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Toast } from "src/models/controls/toast";

@Injectable({ providedIn: "root" })
export class ToastService {
  private _toastSubject = new Subject<Toast>();
  toastEvent: Observable<Toast>;

  constructor() {
    this.toastEvent = this._toastSubject.asObservable();
  }

  error = (message: string) => this._toastSubject.next({
    type: "error",
    message: message,
  });
}
