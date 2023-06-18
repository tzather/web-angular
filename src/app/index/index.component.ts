import { Component } from "@angular/core";
import { TokenService } from "src/services";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent {
  constructor(public tokenService: TokenService) { }
}
