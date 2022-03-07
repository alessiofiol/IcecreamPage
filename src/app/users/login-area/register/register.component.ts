import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServices } from 'src/app/servicios/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userServices: UserServices, public router:Router) { }

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
    }).subscribe((res:any)=>{
      if (res.result) {
      this.UserForm?.reset();
      this.router.navigate(['/login'])
      }
      });

    console.log("Nuevo usuario registrado");
  }
  
}
