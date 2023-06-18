import { Component, OnInit } from "@angular/core";
import { AuthorizationGuard } from "src/guards";
import { ArrayUtil } from "src/util";

@Component({
  selector: "db-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  constructor(public authorizationGuard: AuthorizationGuard) { }

  public zindex = -1;
  public tileOrder = [
    "gauge-dashboard",
    "d3-bar-dashboard",
    "google-bar-dashboard",
    "plotly-bar-dashboard",
    "google-pie-dashboard",
    "google-line-dashboard"
  ];
  public tileIndexList: any[] = [];

  ngOnInit(): void {
    this.tileIndexList = this.tileOrder.map((c, i) => i);
  }


  dragstart(e: any, previousKey: string) {
    e.dataTransfer.setData("previousKey", previousKey);
    setTimeout(() => (this.zindex = 1), 100);
  }

  dragend() {
    this.zindex = -1;
  }

  drop(e: any, currentIndex: number) {
    let previousIndex = this.getOrder(e.dataTransfer.getData("previousKey"));
    if (previousIndex > currentIndex) {
      ArrayUtil.move(this.tileOrder, previousIndex, currentIndex);
    } else {
      ArrayUtil.move(this.tileOrder, previousIndex, currentIndex - 1);
    }
  }

  getOrder(key: string) {
    return this.tileOrder.indexOf(key);
  }
}
