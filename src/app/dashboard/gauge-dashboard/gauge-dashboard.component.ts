import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/services';

@Component({
  selector: 'gauge-dashboard',
  templateUrl: './gauge-dashboard.component.html',
  styleUrls: ['./gauge-dashboard.component.scss']
})
export class GaugeDashboardComponent implements OnInit {
  public gaugeData: any[] = [];
  public selectedGroup: any = {};
  public filterData: any[] = [];
  public groupList: any[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.gaugeChart().subscribe(data => {
      if (data) {
        this.gaugeData = data;
        this.gaugeData.forEach((n: any) => n.color = this.gaugeColor(n.value, 100)); // set the color for each item

        this.groupList = [...new Set(this.gaugeData.map(data => data.group))] // get the group data
          .sort() // sort it
          .map(n => ({ "id": n, "name": n })); // map it to be sent to carousel

        this.selectedGroup = this.groupList[0]; // set the first item to be the selected item
        this.render(); // render data
      }
    })
  }

  render() {
    this.filterData = this.gaugeData?.filter(n => n.group == this.selectedGroup?.id) ?? [];
  }

  gaugeColor(value: any, maxValue: any) {
    if (maxValue <= 0) {
      return "";
    }
    let percantage = value / maxValue;
    if (percantage <= .5) {
      return "green";
    } if (percantage <= .75) {
      return "yellow";
    }
    return "red";
  }

  groupChange(e: any) {
    this.selectedGroup = e;
    this.render();
  }
}
