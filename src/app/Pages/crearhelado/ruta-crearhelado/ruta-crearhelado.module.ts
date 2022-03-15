import { CrearheladoComponent } from './../crearhelado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutaCrearheladoRoutingModule } from './ruta-crearhelado-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CrearheladoComponent
  ],
  imports: [
  CommonModule,
  RutaCrearheladoRoutingModule,
  FormsModule,
  ReactiveFormsModule
  ]
})
export class RutaCrearheladoModule { }
