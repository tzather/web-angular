import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  describe('constructor', () => {
    it('toastEvent is not null', () => {
      expect(service.toastEvent).not.toBeNull();
    });
  });

  describe('error', () => {
    it('toastEvent is not null', (done) => {
      service.error("some error")
      service.toastEvent.subscribe(event => {
        expect(event).toEqual({ type: 'error', message: 'some message' });
        done();
      });
      service.error("some message");
    });
  });
});
