import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CoreModule } from './Core/core.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServices } from './servicios/servicios.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterModule } from './users/login-area/register/register/register.module';
import { LoginModule } from './users/login-area/login/ruta/login.module';



@NgModule({
  declarations: [  
    AppComponent,
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    RegisterModule,
    LoginModule
  ],
  providers: [UserServices],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
