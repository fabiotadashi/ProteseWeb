import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percent-chart',
  templateUrl: './percent-chart.component.html',
  styleUrls: ['./percent-chart.component.sass']
})
export class PercentChartComponent implements OnInit {

  myColors = [{ backgroundColor: ['turquoise', 'pink']}];

  constructor() { }

  ngOnInit() {
  }

  // Doughnut
  public doughnutChartData: number[] = [80, 20];
  public doughnutChartType: string = 'doughnut';


}
