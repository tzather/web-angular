import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { IdentityService } from './identity.service';
import { TokenService } from './token.service';

describe('IdentityService', () => {
  let service: IdentityService;
  const apiServiceSpy: any = jasmine.createSpyObj("ApiService", ["post"])
  const tokenServiceSpy = jasmine.createSpyObj("TokenService", ["getIdentityToken", "setIdentityToken"]);
  const configServiceSpy = {
    "identity": "http://test-identity",
    "dashboard": "http://test-dashboard",
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: TokenService, useValue: tokenServiceSpy },
        { provide: ConfigService, useValue: configServiceSpy }
      ]
    });
    service = TestBed.inject(IdentityService);
  });

  describe('login', () => {
    it('return valid token', async () => {
      apiServiceSpy.post.and.returnValue({ "identityToken": "some token" });
      await service.login({ "username": "test" });
      expect(apiServiceSpy.post).toHaveBeenCalledWith("http://test-identity/login", { "username": "test" });
      expect(tokenServiceSpy.setIdentityToken).toHaveBeenCalledWith("some token")
    });
    it('return invalid token', async () => {
      apiServiceSpy.post.and.returnValue(null);
      await service.login({ "username": "test" });
      expect(apiServiceSpy.post).toHaveBeenCalledWith("http://test-identity/login", { "username": "test" });
      expect(tokenServiceSpy.setIdentityToken).toHaveBeenCalledWith(undefined)
    });
  });
});
