import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}
  getRepositories(): Observable<any> {
    return this.http.get('https://api.github.com/users/amaurioliveira/repos');
    /*     .pipe(
      map((repo: any) => ({
        name: repo.full_name,
        description: repo.description,
        language: repo.language,
      })),
      tap(console.log)
    ); */
  }

  getRepository(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/repos/amaurioliveira/${name}`);
  }
}
