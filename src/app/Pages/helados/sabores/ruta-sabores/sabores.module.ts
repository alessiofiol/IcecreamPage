import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FiltersaborPipe } from './../../../../shared/pipes/filtersabor.pipe';
import { SaboresComponent } from './../sabores.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaboresRoutingModule } from './sabores-routing.module';


@NgModule({
  declarations: [
    SaboresComponent,
    FiltersaborPipe

  ],
  imports: [
    CommonModule,
    SaboresRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SaboresModule { }
