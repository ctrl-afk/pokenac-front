import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Info } from '../model/info';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  private url = 'http://localhost:8080/api/v1/info'

  constructor(private http: HttpClient) { }

  get(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  save(info: Info[]): Observable<Object> {
    return this.http.post(`${this.url}`, info);
  }

  update(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, value);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
