import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { VocabularyMetric } from '../dto/vocabulary-metric.model';
import { VocabularyMetricsService } from './vocabulary-metrics.service';

@Component({
  selector: 'vocabulary-metrics',
  templateUrl: './vocabulary-metrics.component.html'
})
export class VocabularyMetricsComponent implements OnInit {

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
    backgroundColor: '#57B0EB',
    borderColor: '#317BAC',
    pointBackgroundColor: '#317BAC',
    pointBorderColor: '#317BAC',
    pointHoverBackgroundColor: 'red',
    pointHoverBorderColor: 'red'
  }];

  constructor(
    private vocabularyMetricsService: VocabularyMetricsService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getVocabularyMetrics();
  }

  public getVocabularyMetrics(): void {
    this.vocabularyMetricsService.getVocabularyMetrics().subscribe(
      (res: VocabularyMetric[]) => {
        res.forEach((vocabularyMetric: VocabularyMetric) => {

          let dateLabel: string = this.datePipe.transform(vocabularyMetric.date, 'dd/MM/yyyy') as string;
          this.chartLabels.push(dateLabel)

          this.allData.push(vocabularyMetric.quantityOfVocabulariesPracticed);

        })

        this.chartData = [
          {data: this.allData,  label: 'Quantity of vocabularies practiced'}
        ]

      },

      err => console.log(err)
    );
    
  }

}
