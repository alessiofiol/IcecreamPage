import { UserI } from './../Models/user.login';
import { UserInterface } from './../Models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';





@Injectable()

export class UserServices {

   public baseUrl = 'https://apiserverfinal.herokuapp.com/';

   public userUrl = this.baseUrl + 'users'
  

  constructor(private http:HttpClient, public router:Router) { }

  currentUser: Object = {};

  createNewUser(datos:UserInterface) {
    return this.http.post(this.userUrl + '/' + 'registerUser', datos)
  }

  /*logUser(datos:UserI) {
    return this.http.post(userUrl + '/' + 'signin', datos)
  }*/

    public logUser(datos: UserI)
  {
  return this.http.post<any>(`${this.userUrl}/signin`, datos).subscribe((res)=>{
  localStorage.setItem('access_token', res.token)
  this.currentUser = res;
  this.router.navigate([''])
  })
  }

  public isLoggedin ():boolean {
    return localStorage.getItem('access_token') != null ? true:false;
  }

  public doLogout(){
    let removeToken = localStorage.removeItem('access_token')
    if (removeToken == null) {
    this.router.navigate([''])
    }
  }
}
