import { UserI } from './../Models/user.login';
import { UserInterface } from './../Models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, Observable, catchError, map } from 'rxjs';





@Injectable()

export class UserServices {
    //URL de Heroku
    public baseUrl = 'https://apiserverfinal.herokuapp.com/';

    //URL Local
    //public baseUrl = 'http://localhost:5000/';

   public userUrl = this.baseUrl + 'users';

   public currentUser = {};//Aqui guardamos la respuesta del logUser, para comprobar si hay usuario
 
   headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient, public router:Router) { }

  

  createNewUser(datos:UserInterface) {
    console.log("USUARIO datos",    JSON.stringify(datos)  );   

     this.http.post<any>(this.userUrl + '/' + 'registerUser', 
    datos).subscribe((res)=>{
       console.log(res);
     })
  } 

  /*createNewUser(datos: UserInterface): Observable<any> {
    let api = `${this.userUrl}registerUser`;
    return this.http.post(api, datos)
      .pipe(
        catchError(this.handleError)
      )
  }/*

  /*public logUser(datos: UserI){
    return this.http.post<any>(`${this.userUrl}/signin`, datos).subscribe((res)=>{
    localStorage.setItem('access_token', res.token)
    this.getUserProfile(res._id).subscribe((res) => {
      this.currentUser = res;
      this.router.navigate([''])
      })
    })
  }*/

  logUser(datos: UserI) {
    return this.http.post<any>(`${this.userUrl}/signin`, datos)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
				//Seteamos el token
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['perfil/' + res.msg._id]);
				//Volvemos al user-profile una vez ejecutada la función
        })
      })
  }

  getUserProfile(_id: string): Observable<any> {
    //let api = `https://apiserverfinal.herokuapp.com/users/622354817c41bb8038d8772c`;
    let api = `${this.baseUrl}users/${_id}`;
    //console.log(`${id}`)
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  //Funcion para recuperar el token a través del local storage
  public getToken() {
    return localStorage.getItem('access_token');
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
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
  
}
