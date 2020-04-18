import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'notificaciones',   loadChildren: () => import('./notificaciones/notificaciones.module').then(m => m.NotificacionesModule) },
  { path: '', pathMatch:'full', redirectTo: 'notificaciones' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
