import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL = 'https://heroesapp-d730c.firebaseio.com/heroes.json';
  heroeURL = 'https://heroesapp-d730c.firebaseio.com/heroes/';

  constructor(private http: HttpClient) { }

  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);

    return this.http.post( this.heroesURL, body, httpOptions )
      .pipe();
  }

  actualizaHeroe(heroe: Heroe, key$: string) {
    const body = JSON.stringify(heroe);
    const url = `${this.heroeURL}/${key$}.json`;

    return this.http.put( url, body, httpOptions )
      .pipe();
  }

  getHeroe(key$: string) {
    const url = `${this.heroeURL}/${key$}.json`;

    return this.http.get(url)
      .pipe();
  }

  getHeroes() {
    return this.http.get(this.heroesURL)
      .pipe();
  }

  borraHeroe(key$: string) {
    let url = `${this.heroeURL}/${key$}.json`;

    return this.http.delete(url)
      .pipe();
  }
}
