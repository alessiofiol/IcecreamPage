import { HomeComponent } from './../home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutaHomeRoutingModule } from './ruta-home-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RutaHomeRoutingModule,

  ]
})
export class RutaHomeModule { }
