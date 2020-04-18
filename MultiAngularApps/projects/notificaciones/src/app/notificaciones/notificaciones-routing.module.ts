import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificacionesComponent } from './notificaciones.component';
import { BandejaComponent } from './bandeja/bandeja.component';

const routes: Routes = [
  { 
    path: '', component: NotificacionesComponent,
    children: [
      { 
        path: 'bandeja/:filtro', component: BandejaComponent, 
      },
    ]
  },
  { path: '', pathMatch:'full', redirectTo: 'notificaciones' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacionesRoutingModule { }
