import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TokenService } from 'src/services';
import { AuthenticationGuard } from './authentication.guard';

describe('AuthenticationGuard', () => {
  let guard: AuthenticationGuard;
  const routerSpy = jasmine.createSpyObj("Router", ["navigate"])
  const tokenServiceSpy = jasmine.createSpyObj("tokenService", ["isAuthenticated"])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: TokenService, useValue: tokenServiceSpy }
      ]
    });
    guard = TestBed.inject(AuthenticationGuard);
  });

  describe('canActivate', async () => {
    it('autheticated user returns true', async () => {
      tokenServiceSpy.isAuthenticated.and.returnValue(true);
      expect(await guard.canActivate(<any>{}, <any>{})).toBe(true);
    });

    it('un-autheticated user returns true', async () => {
      tokenServiceSpy.isAuthenticated.and.returnValue(false);
      const result = await guard.canActivate(<any>{}, <any>{});
      expect(result).toBeUndefined();
      expect(routerSpy.navigate).toHaveBeenCalledWith(["login"]);
    });

  });
});
