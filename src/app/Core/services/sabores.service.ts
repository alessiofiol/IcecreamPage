import {  userSabor } from 'src/app/Core/models/sabor';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SaboresService {
  endpoint: string = 'https://apiserverfinal.herokuapp.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) { }

  getSabores(): Observable<any> {
    let api = `${this.endpoint}/sabores/`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  public saborregister(sabor:userSabor) {

    return this.http.post(`${this.endpoint}/update-user/:_id`, sabor).pipe(
      catchError(this.handleError)
    )
    }

    // Error 
    handleError(error: HttpErrorResponse) {
      let msg = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        msg = error.error.message;
      } else {
        // server-side error
        msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(msg);
    }
}