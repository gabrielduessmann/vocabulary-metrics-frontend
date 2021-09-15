import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { CommentMetric } from '../dto/comment-metric.model';
import { PracticeMetricsService } from './comment-metrics.service';

@Component({
  selector: 'practice-metrics',
  templateUrl: './comment-metrics.component.html'
})
export class PracticeMetricsComponent implements OnInit {


  public chartLabels: string[] = [];
  public chartType: ChartType = 'line';
  public chartLegend = true;
  public chartData: ChartDataSets[] = [];
  public allData: number[] = [];


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

  public chartColors: any[] = [{
    backgroundColor: '#B2B8BD',
    borderColor: '#6A6E72',
    pointBackgroundColor: '#6A6E72',
    pointBorderColor: '#6A6E72',
    pointHoverBackgroundColor: 'red',
    pointHoverBorderColor: 'red'
  }];

  constructor(
    private practiceMetricsService: PracticeMetricsService,
    private datePipe: DatePipe
    ) { }

  ngOnInit(): void {
    this.getAllMetricsData();
  }

  private getAllMetricsData() {
    this.practiceMetricsService.getCommentMetrics().subscribe(
      (res: CommentMetric[]) => {

        res.forEach((commentMetric: CommentMetric) => {

          let dateLabel: string  = this.datePipe.transform(commentMetric.date, 'dd/MM/yyyy') as string;
          this.chartLabels.push(dateLabel)
         
          this.allData.push(commentMetric.quantityOfCommentsAdded);

        });

        this.chartData = [
          {data: this.allData,  label: 'Quantity of comments added'}
        ]

      },
      err => console.log(err)
    );
  }


}
