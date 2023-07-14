import { animate, style, transition, trigger } from "@angular/animations";

export const OpacityAnimation = trigger("opacityAnimation", [transition(":enter", [
  style({ opacity: 0 }),
  animate("500ms", style({ opacity: 1 }))
])]);
