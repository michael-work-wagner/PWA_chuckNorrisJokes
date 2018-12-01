import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joke } from '../models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getJokes(): Observable<Joke> {
    return this.http.get<Joke>('https://api.chucknorris.io/jokes/random');
  }
}
