import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuantityVocabulariesPracticedDto } from '../dto/quantity-vocabularies-practiced.model';

@Injectable({
  providedIn: 'root'
})
export class PracticeMetricsService {

  private url: string = "http://localhost:8081";

  constructor(
    private http: HttpClient
  ) { }

  public getVocabulariesQuantityPracticedByDay(): Observable<QuantityVocabulariesPracticedDto[]> {
    return this.http.get<QuantityVocabulariesPracticedDto[]>(this.url+"/vocabulary-metrics/day")
  }
}
