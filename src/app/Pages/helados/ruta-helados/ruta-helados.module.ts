import { HeladosComponent } from './../helados.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutaHeladosRoutingModule } from './ruta-helados-routing.module';


@NgModule({
  declarations: [
    HeladosComponent
  ],
  imports: [
    CommonModule,
    RutaHeladosRoutingModule
  ]
})
export class RutaHeladosModule { }
