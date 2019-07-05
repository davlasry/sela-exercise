import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private API_URL = 'https://api.icndb.com';

  constructor(private http: HttpClient) {}

  public getJokes(limit, category): Observable<any[]> {
    let getJokesURL;

    if (category === 'all') {
      getJokesURL = `${this.API_URL}/jokes/random/${limit}?escape=javascript`;
    } else {
      getJokesURL = `${
        this.API_URL
      }/jokes/random/${limit}?escape=javascript&limitTo=${category}`;
    }

    return this.http.get<any>(getJokesURL).pipe(map(result => result.value));
  }

  public getJokesCategories(): Observable<any[]> {
    return this.http
      .get<any>(`${this.API_URL}/categories`)
      .pipe(map(result => result.value));
  }
}
