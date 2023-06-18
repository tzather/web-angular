
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import { ApiService } from './api.service';
import { IndexedDbService } from './indexed-db.service';
import { ToastService } from './toast.service';
import { TokenService } from './token.service';

describe('ApiService', () => {
  let service: ApiService;
  let tokenServiceSpy = jasmine.createSpyObj("TokenService", ["getIdentityToken"]);
  let toastServiceSpy = jasmine.createSpyObj("ToastService", ["error"]);
  let indexedDbService = jasmine.createSpyObj(IndexedDbService, ["get", "set"]);
  const okResult = {
    "ok": true,
    json: () => new Promise((resolve) => resolve({ "name": "john" }))
  };
  const okCsvResult = {
    "ok": true,
    text: () => new Promise((resolve) => resolve("name,age\njake,14"))
  };
  const okAssetResult = {
    "ok": true,
    text: () => new Promise((resolve) => resolve("test-asset"))
  };
  const badResult = { "ok": false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TokenService, useValue: tokenServiceSpy },
        { provide: ToastService, useValue: toastServiceSpy },
        { provide: IndexedDbService, useValue: indexedDbService },
      ]
    });
    service = TestBed.inject(ApiService);
    tokenServiceSpy.getIdentityToken.and.returnValue("");
  });

  xdescribe('get', async () => {
    it('return valid result', async () => {
      (<any>window).fetch = async () => okResult;
      let result = service.getJson("");
      expect(result).toEqual(of({ "name": "john" }));
    });

    it('return valid result from csv', async () => {
      (<any>window).fetch = async () => okCsvResult;
      let result = service.getCsv("");
      expect(result).toEqual(of([["name", "age"], ["jake", "14"]]));
    });

    it('return invalid result with default toaster message', async () => {
      (<any>window).fetch = async () => badResult;
      let result = service.getJson("myurl");
      expect(toastServiceSpy.error).toHaveBeenCalledWith("Failed to get myurl");
      expect(result).toBeNull();
    });

    it('return invalid result with custom toaster message', async () => {
      (<any>window).fetch = async () => badResult;
      let result = service.getJson("myurl", 0, "my custom error message");
      expect(toastServiceSpy.error).toHaveBeenCalledWith("my custom error message");
      expect(result).toBeNull();
    });

    it('return exception from fetch invalid result with default toaster message', async () => {
      (<any>window).fetch = async () => { throw "some error" };
      let result = service.getJson("myurl");
      expect(toastServiceSpy.error).toHaveBeenCalledWith("Failed to get myurl");
      expect(result).toBeNull();
    });

    it('return exception from fetch invalid result with custom toaster message', async () => {
      (<any>window).fetch = async () => { throw "some error" };
      let result = service.getJson("myurl", 0, "my custom error message");
      expect(toastServiceSpy.error).toHaveBeenCalledWith("my custom error message");
      expect(result).toBeNull();
    });
  });

  describe('getAsset', async () => {
    it('return valid result', async () => {
      (<any>window).fetch = async () => okAssetResult;
      let result = await service.getAsset("");
      expect(result).toEqual("test-asset");
    });
    it('asset not found', async () => {
      (<any>window).fetch = async () => badResult;
      let result = await service.getAsset("");
      expect(result).toBeNull();
    });
  })

  describe('post', async () => {
    it('return valid result', async () => {
      (<any>window).fetch = async () => okResult;
      let result = await service.post("", {});
      expect(result).toEqual({ "name": "john" });
    });
  })

  describe('put', async () => {
    it('return valid result', async () => {
      (<any>window).fetch = async () => okResult;
      let result = await service.put("", {});
      expect(result).toEqual({ "name": "john" });
    });
  })

  describe('delete', async () => {
    it('return valid result', async () => {
      (<any>window).fetch = async () => okResult;
      let result = await service.delete("");
      expect(result).toEqual({ "name": "john" });
    });

    it('return invalid result', async () => {
      service = new ApiService(<any>null, <any>null, <any>null);
      (<any>service).fetchApi = function () { return null; }
      let result = await service.delete("");
      expect(result).toBeNull();
    });
  })

  describe('get', async () => {
    it('return valid result', async () => {
      (<any>window).fetch = async () => okResult;
      indexedDbService.set.and.returnValue({});

      let result = await firstValueFrom(service["get"]("application/json", ""));
      expect(result).toEqual({ "name": "john" });
    });
  })

  describe('fetchApi', async () => {
    it('return valid result', async () => {
      (<any>window).fetch = async () => okResult;
      let result = await service["fetchApi"]("", "", "application/json", "", null);
      expect(result).toEqual({ "name": "john" });
    });

    it('return valid result for object', async () => {
      (<any>window).fetch = async () => okResult;
      let result = await service["fetchApi"]("", "", "application/json", "", {});
      expect(result).toEqual({ "name": "john" });
    });

    it('return valid result for json', async () => {
      (<any>window).fetch = async () => okResult;
      let result = await service["fetchApi"]("", "", "application/json", "", {});
      expect(result).toEqual({ "name": "john" });
    });

    it('return valid result for csv', async () => {
      (<any>window).fetch = async () => okCsvResult;
      let result = await service["fetchApi"]("", "", "text/csv", "", {});
      expect(result).toEqual([['name', 'age'], ['jake', '14']]);
    });

    it('return valid result for other', async () => {
      (<any>window).fetch = async () => okCsvResult;
      let result = await service["fetchApi"]("", "", "other", "", {});
      expect(result).toEqual("name,age\njake,14");
    });

    it('return bad result', async () => {
      (<any>window).fetch = async () => badResult;
      let result = await service["fetchApi"]("", "", "application/json", "", {});
      expect(result).toBeNull();
      expect(toastServiceSpy.error).toHaveBeenCalled()
    });

    it('return bad valid result', async () => {
      (<any>window).fetch = async () => badResult;
      let result = await service["fetchApi"]("", "", "application/json", "error message", {});
      expect(result).toBeNull();
      expect(toastServiceSpy.error).toHaveBeenCalledWith("error message")
    });

  })
});
