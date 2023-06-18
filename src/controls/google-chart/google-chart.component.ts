// https://developers.google.com/chart/interactive/docs/gallery/columnchart

import { Component, ElementRef, Input, OnChanges } from "@angular/core";
declare var google: any;

@Component({
  selector: 'google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.scss']
})
export class GoogleChartComponent implements OnChanges {
  @Input() type: string = "";
  @Input() data: any = [];
  private googleChart: any = null;
  private dataTable: any = null;
  private options: any = null;

  constructor(private elRef: ElementRef) { }

  ngOnChanges() {
    google.charts.setOnLoadCallback(() => {
      if (this.googleChart == null && this.data && this.data.length > 0) {
        this.setOptions();
        this.setDataTable();
        this.googleChart = this.displayChart();
      }
      if (this.googleChart) {
        this.setDataTable();
        this.googleChart.draw(this.dataTable, this.options);
      }
    });
  }

  setDataTable() {
    if (this.data && this.data.length > 0) {
      this.dataTable = new google.visualization.DataTable();
      this.dataTable.addColumn('string', this.data[0][0]);
      this.dataTable.addColumn('number', this.data[0][1]);
      this.data.slice(1).forEach((n: any) => {
        this.dataTable.addRow([n[0], parseFloat(n[1])])
      })
    }
  }

  setOptions() {
    this.options = {
      legend: { position: 'none' },
      'width': 450,
      'height': 410,
      'chartArea': { left: 50, top: 20, right: 60, bottom: 30 },
      animation: {
        "startup": true,
        duration: 500,
        easing: 'out',
      },
      vAxis: {
        viewWindow: {
          max: 100,
        }
      }
    };
  }

  displayChart() {
    switch (this.type) {
      case "bar": return new google.visualization.ColumnChart(this.elRef.nativeElement);
      case "line": return new google.visualization.LineChart(this.elRef.nativeElement);
      case "pie": return new google.visualization.PieChart(this.elRef.nativeElement);
      default: return null;
    }
  }
}
