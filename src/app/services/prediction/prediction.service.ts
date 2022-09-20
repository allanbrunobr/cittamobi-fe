import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prediction } from '../../models/prediction/prediction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private cittamobiURL: string;

  constructor(private http: HttpClient) {
    this.cittamobiURL = 'http://localhost:8080/predictions';
  }

  public findAll(): Observable<Prediction[]> {
    return this.http.get<Prediction[]>(this.cittamobiURL);
  }

}
