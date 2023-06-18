import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { TokenService } from "src/services";

@Injectable({ providedIn: "root" })
export class AuthenticationGuard {
  constructor(public router: Router, private tokenService: TokenService) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (this.tokenService.isAuthenticated()) {
      return true;
    }
    return this.router.navigate(["login"]);
  }
}
