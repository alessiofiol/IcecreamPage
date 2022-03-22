import { HomeComponent } from './../home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutaHomeRoutingModule } from './ruta-home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RutaHomeRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class RutaHomeModule { }
