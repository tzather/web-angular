import { Component, EventEmitter, Input, Output } from "@angular/core";
// import { InputComponent } from "../input/input.component";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() header: string = "";
  @Input() reset: boolean = false;
  @Input() help: boolean = false;
  @Input() history: boolean = false;
  @Input() submit: string = "";

  @Output() resetClick = new EventEmitter();
  @Output() helpClick = new EventEmitter();
  @Output() historyClick = new EventEmitter();
  @Output() submitClick = new EventEmitter();
  cardId = () => "card-" + this.header.replace(" ", "");
  // @ViewChildren(InputComponent) inputComponents: QueryList<InputComponent>;
}
