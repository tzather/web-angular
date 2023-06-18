import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IdentityService } from "src/services";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  public model: any = {
    username: "admin@company.com",
    password: "P@ssw0rd",
  };

  constructor(private identityService: IdentityService, private router: Router) { }

  login = async () => this.identityService.login(this.model).then(() => this.router.navigate(["/dashboard"]));
}
