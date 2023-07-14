import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CamelCasePipe } from "./camel-case.pipe";
import { GridListPipe } from "./grid-list.pipe";

@NgModule({
  declarations: [CamelCasePipe, GridListPipe],
  imports: [CommonModule],
  exports: [CamelCasePipe, GridListPipe],
})
export class PipesModule { }
