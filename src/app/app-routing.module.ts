

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/ruta-home/ruta-home-routing.module').then(module => module.RutaHomeRoutingModule)
  },
  {
    path: 'helados',
    loadChildren: () => import('./Pages/helados/ruta-helados/ruta-helados-routing.module').then(module => module.RutaHeladosRoutingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./users/routing/users-routing.module').then(module => module.UsersRoutingModule)
  },
  
  { path: ``, redirectTo: `home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
