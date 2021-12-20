import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'https://pokenac.herokuapp.com/api/v1/pokemon'

  constructor(private http: HttpClient) {}

  get(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  getByName(name: string): Observable<any> {
    
    return this.http.get(`${this.url}?name=${name}`);
  }

  save(pkm: Pokemon): Observable<Object> {
    return this.http.post(`${this.url}`, pkm);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  getAll(page: number): Observable<any> {
    const limit: number = 25;
    return this.http.get(`${this.url}?page=${page}&limit=${limit}`);
  }
}
