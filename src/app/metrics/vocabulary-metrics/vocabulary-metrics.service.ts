import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VocabularyMetric } from '../dto/vocabulary-metric.model';

@Injectable({
  providedIn: 'root'
})
export class VocabularyMetricsService {

  private url: string = "http://localhost:8081";

  constructor(
    private http: HttpClient
  ) { }


  public getVocabularyMetrics(): Observable<VocabularyMetric[]> {
    return this.http.get<VocabularyMetric[]>(`${this.url}/metrics/vocabularies`)
  }
}
