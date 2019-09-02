import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  private endPoint: string = environment.imagesEndPoint;

  constructor(private http: HttpClient) {
  }

  get(url: string): Observable<any> {
    return this.http.get(this.endPoint + url).pipe(
      map(this.handleResponse),
      catchError(this.handleError.bind(this))
    );
  }

  private handleResponse(resp: { items?: any }) {
    return resp.items ? resp.items : null;
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<{ url: string, error: string}> {
    return throwError({
      url: errorResponse.url,
      error: errorResponse.error
    });
  }
}
