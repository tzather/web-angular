import { Component, Input } from "@angular/core";

@Component({
  selector: "app-gauge",
  templateUrl: "./gauge.component.html",
  styleUrls: ["./gauge.component.scss"],
})
export class GaugeComponent {
  @Input() title: any = "";
  @Input() value: any = 0;
  @Input() max: any = 100;
  @Input() color: any = "";

  get dashArray() {
    let circumfernace = Math.PI * 45;
    return `0 ${circumfernace} ${(this.value / this.max) * circumfernace} ${circumfernace}`;
  }
}
