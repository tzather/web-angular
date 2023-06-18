import { TestBed } from '@angular/core/testing';
import { IndexedDbService } from './indexed-db.service';

describe('IndexedDbService', () => {
  let service: IndexedDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexedDbService);
  });

  describe('constructor', async () => {
    it('should be created', async () => {
      let onupgradeneeded = service["request"].onupgradeneeded; // save the method to call inside callFake
      spyOn(service["request"], "onupgradeneeded").and.callFake((n: any) => {
        onupgradeneeded({
          target: {
            result: {
              createObjectStore() { }
            }
          }
        })
      });
      service["request"].dispatchEvent(new Event('upgradeneeded'));

      // Assert
      expect(service["request"]).toBeTruthy();
      expect(service["db"]).toBeTruthy();
    });
  });

  describe('get', async () => {
    it('should be created', async () => {
      const init = spyOn<any>(service, "init").and.callFake(() => {
        service["db"] = {
          transaction: () =>
          ({
            objectStore: () =>
            ({
              get: () => "test-value"
            })
          })
        }
      });
      let result = await service.get("test-key");
      let onsuccess_good = result.onsuccess({ target: { result: "test-onsuccess" } });
      let onsuccess_null = result.onsuccess();

      expect(result.get("test-key")).toEqual("test-value");
      expect(onsuccess_good).toEqual("test-onsuccess");
      expect(onsuccess_null).toBeNull();
    });
  });

  describe('set', async () => {
    it('should be created', async () => {
      let setValue: any = {};
      const init = spyOn<any>(service, "init").and.callFake(() => {
        service["db"] = {
          transaction: () =>
          ({
            objectStore: () =>
            ({
              put: (data: any) => setValue = data
            })
          })
        }
      });
      await service.set({ "my-key": "my-value" });
      expect(setValue).toEqual({ "my-key": "my-value" })
    });
  });
});
