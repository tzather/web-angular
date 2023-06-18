export class CsvUtil {

  csvToArrayTable(csv: any) {
    return csv.trim().split("\n").map((n: any) => n.split(","))
  }

  csvToArrayObject(csv: any) {
    let lines: any = csv.trim().split("\n");
    let headers = lines[0].split(",");
    let result: any[] = [];
    for (var i = 1; i < lines.length; i++) {
      var obj: any = {};
      var line = lines[i].split(",");
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = line[j];
      }
      result.push(obj);
    }
    return result;
  }
}
