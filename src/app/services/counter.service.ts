import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private http = inject(HttpClient);
  private API_URL = environment.AZURE_ENDPOINT;

  getCounter(): Observable<{ counter: number }> {
    return this.http.get<{ counter: number }>(this.API_URL + '/counter/get');
  }

  incrementCounter(): Observable<{ counter: number }> {
    return this.http.post<{ counter: number }>(
      this.API_URL + '/counter/increment',
      {}
    );
  }

  decrementCounter(): Observable<{ counter: number }> {
    return this.http.post<{ counter: number }>(
      this.API_URL + '/counter/decrement',
      {}
    );
  }

  resetCounter(): Observable<{ counter: number }> {
    return this.http.post<{ counter: number }>(
      this.API_URL + '/counter/reset',
      {}
    );
  }
}
