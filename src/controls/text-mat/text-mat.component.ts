import { Component, Input } from "@angular/core";
import { BaseControlComponent } from "../baseControl";

@Component({
  selector: 'text-mat',
  templateUrl: './text-mat.component.html',
  styleUrls: ['./text-mat.component.scss']
})
export class TextMatComponent extends BaseControlComponent {
  @Input() label = "";
  @Input() name = "";
  @Input() iconSuffix = "";

  private _text = "";
  get text(): string {
    return this._text;
  }
  set text(v: string) {
    if (this._text !== v) {
      this._text = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(v: string) {
    if (this._text !== v) {
      this._text = v;
    }
  }
}
