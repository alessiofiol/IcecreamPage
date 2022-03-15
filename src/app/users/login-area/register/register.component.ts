import { UserInterface } from './../../../Models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServices } from 'src/app/servicios/servicios.service';
import { Router } from '@angular/router';
import { comparePassword } from '../validators/matchValidators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public submitted: boolean = false;
  showMsg: boolean = false;

  constructor(private formBuilder: FormBuilder, public router:Router, public userServices: UserServices) { 
    this.registerForm = this.formBuilder.group({
      _id: [''],
      name: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(5), Validators.pattern('[a-zA-Z0-9]*')]],
      repassword: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(5), Validators.pattern('[a-zA-Z0-9]*')]]
    },{
      validator: comparePassword("password", "repassword")
    })
  }

  ngOnInit(): void {
  }


  //Función para el botón de Login que aparece al registrarse 
  btnClick=  () => {
    this.router.navigateByUrl('/login');
  };
  

  public createNewUserSubmit(): void{
    console.log("primera linea")
    this.submitted = true;

    

    if(this.registerForm.valid){

      

      const user: UserInterface = {
        _id: "",
        name: this.registerForm.get('name')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
        //repassword: this.registerForm.get('repassword')?.value,
        };
        console.log("USUARIO", user);   
        console.log("createNewUserSubmit");
        this.userServices.createNewUser( user );


        this.showMsg= true;
        this.registerForm.reset();
        this.submitted = false;
        //this.router.navigate(['/login']);
        
        
      }
      
    }

  }




