
import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;
  let apiServiceSpy: any;
  let configService: any = {
    identity: "test-identity",
    dashboard: "test-dashboard"
  }

  beforeEach(async () => {
    apiServiceSpy = jasmine.createSpyObj("ApiService", ["getJson", "getCsv"])
    apiServiceSpy.getCsv.and.returnValue("csv data");
    apiServiceSpy.getJson.and.returnValue("json data");
    service = new DashboardService(apiServiceSpy, configService);
  });


  describe('barChart', async () => {
    it('should return data', async () => {
      expect(service.barChart().toString()).toBe("csv data")
    });
  });

  describe('gaugeChart', async () => {
    it('should return data', async () => {
      expect(service.gaugeChart().toString()).toBe("json data")
    });
  });

  describe('lineChart', async () => {
    it('should return data', async () => {
      expect(service.lineChart().toString()).toBe("csv data")
    });
  });

  describe('piechart', async () => {
    it('should return data', async () => {
      expect(service.pieChart().toString()).toBe("csv data")
    });
  });
});
