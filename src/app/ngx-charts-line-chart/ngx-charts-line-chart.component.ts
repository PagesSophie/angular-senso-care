import { Component, OnInit } from '@angular/core';
import { ServiceData } from '../service-data/service-data';

@Component({
  selector: 'app-ngx-charts-line-chart',
  templateUrl: './ngx-charts-line-chart.component.html',
  styleUrls: ['./ngx-charts-line-chart.component.scss']
})
export class NgxChartsLineChartComponent implements OnInit {
  multi = [
    {
      "name": "NoData",
      "series": [
        {
          "name": "00-00-0000",
          "value": 0
        },
      ]
    }
  ];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Sensors';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private serviceData : ServiceData) {
    Object.assign(this.multi );
  }

  ngOnInit(): void {
    this.serviceData.getMultiData()
      .then(response => this.multi = response)
      .catch(error => console.log(error));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
