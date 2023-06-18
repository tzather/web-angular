import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenService);
    sessionStorage.clear();
  });

  afterEach(() => { sessionStorage.clear(); });

  describe('constructor', () => {
    it('default is set to false', () => {
      service.setIdentityToken(`${window.btoa(JSON.stringify({}))}.${window.btoa(JSON.stringify({}))}.signature`);
      service = new TokenService();
      expect(service.isAuthenticated()).toBe(true);
    });
  });

  describe('getIdentityToken', () => {
    it('default is set to false', () => {
      service.setIdentityToken(`${window.btoa(JSON.stringify({}))}.${window.btoa(JSON.stringify({}))}.signature`);
      service = new TokenService();
      expect(service.getIdentityToken()).toBeTruthy();
    });
  });

  describe('isAuthenticated', () => {
    it('default is set to false', () => {
      expect(service.isAuthenticated()).toBe(false);
    });
    it('if token exist then it is set to true', () => {
      service.setIdentityToken(`${window.btoa(JSON.stringify({}))}.${window.btoa(JSON.stringify({}))}.signature`);
      expect(service.isAuthenticated()).toBe(true);
    });
  });

  describe('fullName', () => {
    it('default is set to empty string', () => {
      expect(service.fullName()).toBe("");
    });
    it('only first name is set', () => {
      service.setIdentityToken(`${window.btoa(JSON.stringify({}))}.${window.btoa(JSON.stringify({ "firstName": "John" }))}.signature`);
      expect(service.fullName()).toBe("John");
    });
    it('only last name is set', () => {
      service.setIdentityToken(`${window.btoa(JSON.stringify({}))}.${window.btoa(JSON.stringify({ "lastName": "Smith" }))}.signature`);
      expect(service.fullName()).toBe("Smith");
    });
    it('both first and last name is set', () => {
      service.setIdentityToken(`${window.btoa(JSON.stringify({}))}.${window.btoa(JSON.stringify({ "firstName": "John", "lastName": "Smith" }))}.signature`);
      expect(service.fullName()).toBe("John Smith");
    });
  });

  describe('displayBarChart', () => {
    it('default is set to false', () => {
      expect(service.displayBarChart()).toBe(false);
    });
    it('displayBarChart is set to false', () => {
      service.setIdentityToken(`${window.btoa(JSON.stringify({}))}.${window.btoa(JSON.stringify({ "displayBarChart": false }))}.signature`);
      expect(service.displayBarChart()).toBe(false);
    });
    it('displayBarChart is set to true', () => {
      service.setIdentityToken(`${window.btoa(JSON.stringify({}))}.${window.btoa(JSON.stringify({ "displayBarChart": true }))}.signature`);
      expect(service.displayBarChart()).toBe(true);
    });
  });

  describe('displayGauge', () => {
    it('default is set to false', () => {
      expect(service.displayGauge()).toBe(false);
    });
    it('displayGauge is set to false', () => {
      service.setIdentityToken(`${window.btoa(JSON.stringify({}))}.${window.btoa(JSON.stringify({ "displayGauge": false }))}.signature`);
      expect(service.displayGauge()).toBe(false);
    });
    it('displayGauge is set to true', () => {
      service.setIdentityToken(`${window.btoa(JSON.stringify({}))}.${window.btoa(JSON.stringify({ "displayGauge": true }))}.signature`);
      expect(service.displayGauge()).toBe(true);
    });
  });

  describe('displayPieChart', () => {
    it('default is set to false', () => {
      expect(service.displayPieChart()).toBe(false);
    });
    it('displayPieChart is set to false', () => {
      service.setIdentityToken(`${window.btoa(JSON.stringify({}))}.${window.btoa(JSON.stringify({ "displayBarChart": false }))}.signature`);
      expect(service.displayPieChart()).toBe(false);
    });
    it('displayPieChart is set to true', () => {
      service.setIdentityToken(`${window.btoa(JSON.stringify({}))}.${window.btoa(JSON.stringify({ "displayBarChart": true }))}.signature`);
      expect(service.displayPieChart()).toBe(true);
    });
  });

  describe('displayLineChart', () => {
    it('default is set to false', () => {
      expect(service.displayLineChart()).toBe(false);
    });
    it('displayLineChart is set to false', () => {
      service.setIdentityToken(`${window.btoa(JSON.stringify({}))}.${window.btoa(JSON.stringify({ "displayBarChart": false }))}.signature`);
      expect(service.displayLineChart()).toBe(false);
    });
    it('displayLineChart is set to true', () => {
      service.setIdentityToken(`${window.btoa(JSON.stringify({}))}.${window.btoa(JSON.stringify({ "displayBarChart": true }))}.signature`);
      expect(service.displayLineChart()).toBe(true);
    });
  });
});

