import { CacheUtil } from "./cache.util";

describe("CacheUtil", () => {
  describe("Constructor", () => {
    it("get", () => {
      expect(CacheUtil.get("one")).toEqual(null);
    });
    it("set", () => {
      CacheUtil.set("two", "test value")
      expect(CacheUtil.get("two")).toEqual("test value");
      CacheUtil.set("two", null)
    });
  });
});

