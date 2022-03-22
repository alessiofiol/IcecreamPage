import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EspecialidadesComponent } from './../especialidades.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialidadesRoutingModule } from './especialidades-routing.module';
import { FilterespecialPipe } from 'src/app/shared/pipes/filterespecial.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    EspecialidadesComponent,
    FilterespecialPipe
  ],
  imports: [
    CommonModule,
    EspecialidadesRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class EspecialidadesModule { }
