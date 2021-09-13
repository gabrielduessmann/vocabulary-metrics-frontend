import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { PracticeMetricsService } from './practice-metrics.service';

@Component({
  selector: 'practice-metrics',
  templateUrl: './practice-metrics.component.html',
  styleUrls: ['./practice-metrics.component.css']
})
export class PracticeMetricsComponent implements OnInit {


  // public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLabels: string[] = [];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  // public barChartData = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  // ];

  public barChartData: ChartDataSets[] = [];
  public allQuantites: number[] = [];


  public chartOptions: ChartOptions = {
    responsive: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

  constructor(
    private practiceMetricsService: PracticeMetricsService,
    private datePipe: DatePipe
    ) { }

  ngOnInit(): void {
    this.getAllMetricsData();
  }

  private getAllMetricsData() {
    this.practiceMetricsService.getVocabulariesQuantityPracticedByDay().subscribe(
      res => {
        console.log(res);
        res.forEach(metrics => {

          let date: string  = this.datePipe.transform(metrics.date, 'dd/MM/yyyy') as string;
          this.barChartLabels.push(date)
         
          this.allQuantites.push(metrics.quantityOfVocabulariesPracticed);
        });
        this.barChartData = [
          {data: this.allQuantites,  label: 'Vocabularies practiced'}
        ]
      },
      err => console.log(err)
    );
  }


}
