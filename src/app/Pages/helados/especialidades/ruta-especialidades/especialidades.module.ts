import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EspecialidadesComponent } from './../especialidades.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialidadesRoutingModule } from './especialidades-routing.module';
import { FilterespecialPipe } from 'src/app/shared/pipes/filterespecial.pipe';


@NgModule({
  declarations: [
    EspecialidadesComponent,
    FilterespecialPipe
  ],
  imports: [
    CommonModule,
    EspecialidadesRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class EspecialidadesModule { }
