import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AutenticacionGuard} from "./guards/autenticacion.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  // {
  //   path: 'usuarios/listado',
  //   loadChildren: () => import('./users/pages/listado/listado.module').then( m => m.ListadoPageModule),
  //   canLoad:[AutenticacionGuard],
  //   canActivate:[AutenticacionGuard]
  //
  // },
  {
    // Módulo de autenticación
    path: 'auth',
    loadChildren: () => import('./guards/autenticacion.guard').then(m => m.AutenticacionGuard),
  },
  {
      path: 'dashboard',
      loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),
     // canLoad:[AutenticacionGuard],
     // canActivate:[AutenticacionGuard]
    },
    {
      path: 'listado-videojuegos',
      loadChildren: () => import('./pages/listado-videojuegos/listado-videojuegos.module').then( m => m.ListadoVideojuegosPageModule),
  //    canLoad:[AutenticacionGuard],
  //    canActivate:[AutenticacionGuard]
    },
    {
      path: 'crear-videojuego',
      loadChildren: () => import('./pages/editar-videojuego/editar-videojuego.module').then( m => m.EditarVideojuegoPageModule),
  //    canLoad:[AutenticacionGuard],
  //    canActivate:[AutenticacionGuard]
    },
    {
      path: 'editar-videjuego/:id',
      loadChildren: () => import('./pages/editar-videojuego/editar-videojuego.module').then( m => m.EditarVideojuegoPageModule),
  //    canLoad:[AutenticacionGuard],
  //    canActivate:[AutenticacionGuard]
    },
    {
      path: 'ver-videojuego/:id',
      loadChildren: () => import('./pages/ver-videojuego/ver-videojuego.module').then( m => m.VerVideojuegoPageModule),
  //    canLoad:[AutenticacionGuard],
  //    canActivate:[AutenticacionGuard]
    },
    {
      path: '**',
      redirectTo: 'login'
    },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
