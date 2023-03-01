import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';

@Injectable({
  'providedIn':'root'
})
export class HerosService {


  constructor(private httpClient: HttpClient) { }


  getHeroResources<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url)
  }
  
  handleError({ error }: { error: HttpErrorResponse; }): Observable<never> {
    let errorMessage = '';
    if (error?.error instanceof ErrorEvent) {
      
      errorMessage = `An error occurred: ${error?.error?.message}`;
    } else {
      switch (error?.status) {
        case 400:
          errorMessage = 'Bad request. Please try again.';
          break;
        case 401:
          errorMessage = 'Unauthorized. Please log in and try again.';
          break;
        case 404:
          errorMessage = 'Resource not found. Please check your URL and try again.';
          break;
        case 500:
          errorMessage = 'Internal server error. Please try again later.';
          break;
        default:
          errorMessage = `An unknown error occurred: ${error?.message}`;
          break;
      }
    }

    return throwError(errorMessage);
  }
}
