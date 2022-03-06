import { UserServices } from 'src/app/servicios/servicios.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServices: UserServices) { }

  ngOnInit(): void {
  }

  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''), 
  })

  logUser() {
    
    this.userServices.logUser({
      "_id": "",
      "name": "",
      "email": this.LoginForm.get('email')!.value,
      "password": this.LoginForm.get('password')!.value
    }).subscribe();

    console.log("Usuario logado");

  }

}
