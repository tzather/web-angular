import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PipesModule } from "src/pipes/pipes.module";
import { ButtonMatComponent } from './button-mat/button-mat.component';
import { ButtonComponent } from "./button/button.component";
import { CardBsComponent } from './card-bs/card-bs.component';
import { CardMatComponent } from './card-mat/card-mat.component';
import { CardComponent } from "./card/card.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { D3ChartComponent } from './d3-chart/d3-chart.component';
import { GaugeComponent } from "./gauge/gauge.component";
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { PlotlyChartComponent } from './plotly-chart/plotly-chart.component';
import { SelectComponent } from "./select/select.component";
import { TextMatComponent } from './text-mat/text-mat.component';
import { TextComponent } from "./text/text.component";
import { ToastComponent } from "./toast/toast.component";

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    CarouselComponent,
    D3ChartComponent,
    GaugeComponent,
    GoogleChartComponent,
    PlotlyChartComponent,
    SelectComponent,
    TextComponent,
    ToastComponent,
    CardMatComponent,
    CardBsComponent,
    ButtonMatComponent,
    TextMatComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    // Material
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    CardMatComponent,
    CarouselComponent,
    D3ChartComponent,
    GaugeComponent,
    GoogleChartComponent,
    PlotlyChartComponent,
    SelectComponent,
    TextComponent,
    ToastComponent,
    TextMatComponent,
    CardBsComponent
  ],
})
export class ControlsModule { }
