// https://d3-graph-gallery.com/barplot.html

import { Component, ElementRef, Input, OnChanges } from "@angular/core";
declare var d3: any;


@Component({
  selector: 'd3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.scss']
})
export class D3ChartComponent implements OnChanges {
  @Input() data: any = [];
  @Input() options: Array<any> = [];

  constructor(private elRef: ElementRef) { }

  ngOnChanges(): void {
    if (this.data && this.data.length > 0) {
      this.render();
    }
  }

  private render() {
    const margin = { top: 15, right: 10, bottom: 40, left: 50 },
      width = 400 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select(this.elRef.nativeElement)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    let d3Data = this.data.slice(1);

    // X axis
    const x = d3.scaleBand()
      .range([0, width])
      .domain(d3Data.map((d: any) => Object.values(d)[0]))
      .padding(0.2);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-25)")
      .style("text-anchor", "end");

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([height, 0]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // Bars
    svg.selectAll("mybar")
      .data(d3Data)
      .join("rect")
      .attr("x", (d: any) => x(Object.values(d)[0]))
      .attr("y", (d: any) => y(Object.values(d)[1]))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => height - y(Object.values(d)[1]))
      .attr("fill", "#69b3a2");
  }
}
