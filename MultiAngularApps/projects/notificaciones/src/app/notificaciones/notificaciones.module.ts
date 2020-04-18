import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificacionesRoutingModule } from './notificaciones-routing.module';

import { NotificacionesComponent } from './notificaciones.component';
import { MenuComponent } from './menu/menu.component';
import { BandejaComponent } from './bandeja/bandeja.component';

@NgModule({
  declarations: [NotificacionesComponent, MenuComponent, BandejaComponent],
  imports: [
    CommonModule,
    NotificacionesRoutingModule
  ]
})
export class NotificacionesModule { }
