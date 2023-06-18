import { TestBed } from '@angular/core/testing';

import { TokenService } from 'src/services';
import { AuthorizationGuard } from './authorization.guard';

describe('AuthorizationGuard', () => {
  let guard: AuthorizationGuard;
  const tokenServiceSpy = jasmine.createSpyObj("tokenService", ["displayGauge", "displayBarChart", "displayPieChart", , "displayLineChart"])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TokenService, useValue: tokenServiceSpy }
      ]
    });
    guard = TestBed.inject(AuthorizationGuard);
  });

  describe('canActivateChild', () => {
    it('always true', () => {
      expect(guard.canActivateChild(<any>null)).toBe(true);
    });
  });

  describe('displayBarChart', () => {
    it('return true if displayBarChart in tokenservice is true', () => {
      tokenServiceSpy.displayBarChart.and.returnValue(true);
      expect(guard.displayBarChart()).toBe(true);
    });
    it('return false if displayBarChart in tokenservice is false', () => {
      tokenServiceSpy.displayBarChart.and.returnValue(false);
      expect(guard.displayBarChart()).toBe(false);
    });
  });

  describe('displayGauge', () => {
    it('return true if displayGauge in tokenservice is true', () => {
      tokenServiceSpy.displayGauge.and.returnValue(true);
      expect(guard.displayGauge()).toBe(true);
    });
    it('return false if displayGauge in tokenservice is false', () => {
      tokenServiceSpy.displayGauge.and.returnValue(false);
      expect(guard.displayGauge()).toBe(false);
    });
  });

  describe('displayPieChart', () => {
    it('return true if displayPieChart in tokenservice is true', () => {
      tokenServiceSpy.displayPieChart.and.returnValue(true);
      expect(guard.displayPieChart()).toBe(true);
    });
    it('return false if displayPieChart in tokenservice is false', () => {
      tokenServiceSpy.displayPieChart.and.returnValue(false);
      expect(guard.displayPieChart()).toBe(false);
    });
  });

  describe('displayLineChart', () => {
    it('return true if displayLineChart in tokenservice is true', () => {
      tokenServiceSpy.displayLineChart.and.returnValue(true);
      expect(guard.displayLineChart()).toBe(true);
    });
    it('return false if displayLineChart in tokenservice is false', () => {
      tokenServiceSpy.displayLineChart.and.returnValue(false);
      expect(guard.displayLineChart()).toBe(false);
    });
  });
});
