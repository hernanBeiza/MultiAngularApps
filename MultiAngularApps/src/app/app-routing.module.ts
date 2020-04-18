import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'notificaciones',
    loadChildren: () => import('./../../projects/notificaciones/src/app/app-notificaciones-shared.module').then(m => m.AppNotificacionesSharedModule)
  },
  {
    path: 'tramitar',
    loadChildren: () => import('./../../projects/tramitar/src/app/app-tramitar-shared.module').then(m => m.AppTramitarSharedModule)
  },
  //{ path: '', pathMatch:'full', redirectTo: 'tramitar/consultar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }