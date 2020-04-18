import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',   loadChildren: () => import('./notificaciones/notificaciones.module').then(m => m.NotificacionesModule) },
  //{ path: '', pathMatch:'full', redirectTo: 'consultar' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSharedRoutingModule { }
