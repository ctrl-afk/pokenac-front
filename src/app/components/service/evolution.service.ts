import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EvolutionService {
  private url = 'http://pokenac.herokuapp.com/api/v1/evo'

  constructor(private http: HttpClient) { }


  get(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  save(evo: Object): Observable<Object> {
    return this.http.post(`${this.url}`, evo);
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
