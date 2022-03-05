
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from '../login-area/register/register.component';
import { LoginComponent } from '../login-area/login/login.component';
import { LoginAreaComponent } from '../login-area/login-area.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginAreaComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
