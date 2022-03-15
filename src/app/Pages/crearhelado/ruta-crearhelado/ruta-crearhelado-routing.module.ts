import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearheladoComponent } from '../crearhelado.component';

const routes: Routes = [
  {
    path: '',
    component: CrearheladoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RutaCrearheladoRoutingModule { }
