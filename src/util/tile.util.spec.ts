import { TileUtil } from "./tile.util";

describe("TileUtil", () => {
  it("Constructor: default gives one column", () => {
    let tileUtil = new TileUtil();
    expect(tileUtil.cols).toBeTruthy();
  });
});
