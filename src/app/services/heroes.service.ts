import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Heroe } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private URL_API = 'http://localhost:3000/heroes';

  constructor( private http: HttpClient ) { }

  public getAllHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.URL_API);
  } 
  
  public getHeroeById(id: number): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.URL_API}/${id}`);
  }

  public createHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(this.URL_API, heroe);
  }

  public updateHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.URL_API}/${heroe.id}`, heroe);
  }

  public deleteHeroe(id: string): Observable<Heroe> { 
    return this.http.delete<Heroe>(`${this.URL_API}/${id}`);
  }

}
