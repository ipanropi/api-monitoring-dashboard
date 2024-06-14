import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Read
  getQuery(params?: any): Observable<any[]> {
    let queryParams = new HttpParams();
    if (params) {
      for (let key in params) {
        if (params.hasOwnProperty(key)) {
          queryParams = queryParams.append(key, params[key]);
        }
      }
    }
    return this.http.get<any[]>(`${this.baseUrl}/getQuery`, { params: queryParams });
  }

}
