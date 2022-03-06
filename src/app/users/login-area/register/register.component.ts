import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServices } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userServices: UserServices) { }

  ngOnInit(): void {
  }

  UserForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''), 
  })

  createNewUser() {
    

    this.userServices.createNewUser({
      "_id": "",
      "name": this.UserForm.get('name')!.value,
      "email": this.UserForm.get('email')!.value,
      "password": this.UserForm.get('password')!.value
    }).subscribe();

    console.log("Nuevo usuario registrado");
  }
  
}
