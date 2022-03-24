import { Token } from './../Models/token';
import { UserI } from './../Models/user.login';
import { UserInterface } from './../Models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, Observable, catchError, map } from 'rxjs';

import jwt_decode from "jwt-decode";



@Injectable({
  providedIn: 'root'
})



export class UserServices {
    //URL de Heroku
    public baseUrl = 'https://apiserverfinal.herokuapp.com/';

    //URL Local
    //public baseUrl = 'http://localhost:5000/';

   public userUrl = this.baseUrl + 'users';

   public currentUser = {};//Aqui guardamos la respuesta del logUser, para comprobar si hay usuario

   public currentID = "";
 
   headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient, public router:Router) { }

  
  createNewUser(datos: UserInterface): Observable<any> {
    let api = `${this.userUrl}/registerUser`;
    //console.log("entro a crear el user")
    return this.http.post(api, datos)
      .pipe(
        catchError(this.handleError)
      )    
  }

  public logUser(datos: UserI): Observable<any> {
    return this.http.post<any>(`${this.userUrl}/signin`, datos)
    .pipe(
      catchError(this.handleError)
    )    
  }

  getUserProfile(_id: string): Observable<any> {
    let api = `${this.baseUrl}users/${_id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    )
  }

  //Funcion para recuperar el token a través del local storage
  public getToken() {
    return localStorage.getItem('access_token');
  }

  public getIdByToken() {
    var token = localStorage.getItem('access_token');
    if (token !== null) {
    var decoded:Token;
    
    decoded = jwt_decode(token!);
    //console.log(decoded);
    //console.log(decoded['userId'])
    return decoded['userId']
    } else {
      return "1234"
    }
  }

  //Comprueba si hay token en el local storage, es decir, si el usuario está locago
  public isLoggedin ():boolean {
    return localStorage.getItem('access_token') != null ? true:false;
  }

  //Elimina el token de la local storage
  public doLogout(){
    let removeToken = localStorage.removeItem('access_token')
    if (removeToken == null) {
    this.router.navigate([''])
    }
  }

  //Esta función nos permite modificar el mensaje de error por defecto de Angular y usar uno nuestro
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side errore 
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
  
}
