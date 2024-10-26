import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Fixture } from './model.component';

@Injectable({
  providedIn: 'root',
})
export class FixturesService {
  private apiUrl = 'https://api.exam1.com/data';
  constructor(private http: HttpClient) {}

  getMatches() {
    return this.http
      .get<Fixture[]>(`${this.apiUrl}/fixtures`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`,
      );
    }
    return throwError('Something went wrong. Please try again later.');
  }
}
