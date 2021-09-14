import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentMetric } from '../dto/comment-metric.model';

@Injectable({
  providedIn: 'root'
})
export class PracticeMetricsService {

  private url: string = "http://localhost:8081";

  constructor(
    private http: HttpClient
  ) { }

  public getCommentMetrics(): Observable<CommentMetric[]> {
    return this.http.get<CommentMetric[]>(this.url+"/metrics/comments")
  }
}
