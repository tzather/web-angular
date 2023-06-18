import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnChanges {
  @Input() data: any[] = [];
  @Output() onchange = new EventEmitter();
  selectedItem: any = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data.length > 0) {
      this.selectedItem = this.data[0];
    }
  }

  prev() {
    const nextIndex = this.data.indexOf(this.selectedItem) - 1;
    this.selectedItem = nextIndex >= 0 ? this.data[nextIndex] : this.data[this.data.length - 1];
    this.onchange.emit(this.selectedItem);
  }
  next() {
    const nextIndex = this.data.indexOf(this.selectedItem) + 1;
    this.selectedItem = nextIndex < this.data.length ? this.data[nextIndex] : this.data[0];
    this.onchange.emit(this.selectedItem);
  }
}
