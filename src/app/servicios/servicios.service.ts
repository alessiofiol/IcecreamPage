import { UserI } from './../Models/user.login';
import { UserInterface } from './../Models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'https://apiserverfinal.herokuapp.com/';

const userUrl = baseUrl + 'users'


@Injectable()

export class UserServices {

  constructor(private http:HttpClient) { }

  createNewUser(datos:UserInterface) {
    return this.http.post(userUrl + '/' + 'registerUser', datos)
  }

  logUser(datos:UserI) {
    return this.http.post(userUrl + '/' + 'signin', datos)
  }
}
