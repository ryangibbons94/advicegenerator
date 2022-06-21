import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  url = 'https://api.adviceslip.com/advice';

  getQuote() {
    return this.http.get(this.url);
  }

  constructor(private http: HttpClient) {}
}
