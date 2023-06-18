import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { TokenService } from "src/services";

@Injectable({ providedIn: "root" })
export class AuthorizationGuard {

  constructor(private tokenService: TokenService) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot): boolean {
    // const role = (childRoute.data as any).policy;
    // if (role == "chart") return false;
    return true;
  }

  displayGauge(): boolean {
    return this.tokenService.displayGauge();
  }

  displayBarChart(): boolean {
    return this.tokenService.displayBarChart();
  }

  displayPieChart(): boolean {
    return this.tokenService.displayPieChart();
  }

  displayLineChart(): boolean {
    return this.tokenService.displayLineChart();
  }
}
