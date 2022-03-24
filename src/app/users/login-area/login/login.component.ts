import { UserI } from './../../../Models/user.login';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServices } from 'src/app/servicios/servicios.service';
import { Router } from '@angular/router';
import { comparePassword } from '../validators/matchValidators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserServices]
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: boolean = false;
  showMsgError: boolean = false;

  constructor(private formBuilder: FormBuilder, public router:Router, private userServices: UserServices) { 
    this.loginForm = this.formBuilder.group({
      _id: [''],
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(5), Validators.pattern('[a-zA-Z0-9]*')]],
      repassword: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(5), Validators.pattern('[a-zA-Z0-9]*')]]
    },{
      validator: comparePassword("password", "repassword")
    })
  }

  ngOnInit(): void {
  }

  public logUserSubmit(): void{
    
    
    
    console.log("primera linea")
    this.submitted = true;

    

    if(this.loginForm.valid){

      const userI: UserI = {
        _id: "",
        name: "",
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
        //repassword: this.loginForm.get('repassword')?.value,
        };
        console.log("USUARIO", userI);   
        console.log("logUserSubmit");
        this.userServices.logUser( userI )
          .subscribe((res)=>{
            localStorage.setItem('access_token', res.token)
            this.userServices.getUserProfile(res._id)
            .subscribe((res) => {
              this.userServices.currentUser = res;
              this.router.navigate(['/home'])
            })
          }, (err) => {
                console.log(err);
                this.showMsgError=true;
              }
          )};
        console.log("paso el logUser");

        

        
        //this.loginForm.reset();
        this.submitted = false;
        //this.router.navigate(['/login']);
        
        
        
    
      
        
  }

    navRegister() {
      this.router.navigateByUrl('/registro');
    };
}


/*
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
    });

    console.log("Usuario logado");

  }

}
*/