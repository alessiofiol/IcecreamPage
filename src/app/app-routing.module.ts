import { AuthGuard } from './Core/guards/auth.guard';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/ruta-home/ruta-home.module').then(module => module.RutaHomeModule)
  },
  {
    path: 'helados',
    loadChildren: () => import('./Pages/helados/ruta-helados/ruta-helados.module').then(module => module.RutaHeladosModule)
  },
  {
    path: 'sabores',
    loadChildren: ()=>import('./Pages/helados/sabores/ruta-sabores/sabores.module').then(module=> module.SaboresModule)
  },
  {
    path:'especialidades',
    loadChildren: ()=>import('./Pages/helados/especialidades/ruta-especialidades/especialidades.module').then(module=>module.EspecialidadesModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login-area/login/ruta/login.module').then(module => module.LoginModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./users/login-area/register/register/register.module').then(module => module.RegisterModule)
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./users/perfil/ruta/perfil.module').then(module => module.PerfilModule),
    canActivate: [AuthGuard]
  },
 { path: 'crearhelados/:id',
    loadChildren: () => import('./Pages/crearhelado/ruta-crearhelado/ruta-crearhelado.module').then(module => module.RutaCrearheladoModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
