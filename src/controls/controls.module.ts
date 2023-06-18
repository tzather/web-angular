import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ButtonComponent } from "./button/button.component";
import { CardComponent } from "./card/card.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { D3ChartComponent } from './d3-chart/d3-chart.component';
import { GaugeComponent } from "./gauge/gauge.component";
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { PlotlyChartComponent } from './plotly-chart/plotly-chart.component';
import { SelectComponent } from "./select/select.component";
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
  ],
  imports: [CommonModule, FormsModule],
  exports: [
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
  ],
})
export class ControlsModule { }
