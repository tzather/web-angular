import { CsvUtil } from './csv.util';

describe('CsvService', () => {
  let util: CsvUtil;

  beforeEach(() => {
    util = new CsvUtil();
  });

  describe("csvToArrayTable", () => {
    it('csv converted to array table', () => {
      const expected: any = [
        ["Name", "Value"],
        ["One", "100"],
        ["Two", "200"]
      ];
      const result = util.csvToArrayTable(`
Name,Value
One,100
Two,200
      `);
      expect(result).toEqual(expected);
    });
  });

  describe("csvToArrayObject", () => {
    it('csv converted to array object', () => {
      const expected: any = [
        { "Name": "One", "Value": "100" },
        { "Name": "Two", "Value": "200" }
      ];
      const result = util.csvToArrayObject(`
Name,Value
One,100
Two,200
      `);
      expect(result).toEqual(expected);
    });
  });
});
