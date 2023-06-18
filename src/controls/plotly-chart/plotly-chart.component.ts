// https://plotly.com/javascript/bar-charts

import { Component, ElementRef, Input, OnChanges } from "@angular/core";
declare var Plotly: any;

@Component({
  selector: 'plotly-chart',
  templateUrl: './plotly-chart.component.html',
  styleUrls: ['./plotly-chart.component.scss']
})
export class PlotlyChartComponent implements OnChanges {
  @Input() type: string = "";
  @Input() data: any = [];
  @Input() options: Array<any> = [];

  constructor(private elRef: ElementRef) { }

  ngOnChanges() {
    const plotlyData = this.getPlotlyData("bar");
    this.displayColumnChart(plotlyData);
  }

  getPlotlyData(type: string) {
    var plotlyData: any[] = [];
    if (this.data && this.data.length > 0) {

      // get the x labels
      let xLabels: any[] = [];
      this.data.slice(1).forEach((value: any) => xLabels.push(value[0]));

      // get the y labels
      let yLabels: any[] = this.data[0].slice(1);

      // get the value in the way ploty expects
      yLabels.forEach((yLabel, yIndex) => {
        let d: any[] = [];
        xLabels.forEach((xLabel, xIndex) => d.push(this.data[xIndex + 1][yIndex + 1]));
        plotlyData.push({
          x: xLabels,
          y: d,
          name: yLabel,
          marker: { color: this.options[yIndex]?.color },
          type: type,
        });
      });
    }
    return plotlyData;
  }

  displayColumnChart(plotlyData: any) {

    Plotly.newPlot(this.elRef.nativeElement, plotlyData, {
      barmode: "stack",
      xaxis: { tickangle: -25 },
      yaxis: { zeroline: false, gridwidth: 2 },
      bargap: 0.2,
      margin: {
        l: 40,
        r: 10,
        t: 0,
        b: 80,
        // pad: 0
      }
    }, { displayModeBar: false });

  }
}
