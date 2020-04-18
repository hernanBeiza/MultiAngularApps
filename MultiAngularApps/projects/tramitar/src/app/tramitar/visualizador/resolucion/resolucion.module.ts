import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResolucionRoutingModule } from './resolucion-routing.module';

import { ResolucionAgregarComponent } from './resolucion-agregar/resolucion-agregar.component';

@NgModule({
  declarations: [ResolucionAgregarComponent],
  imports: [
    CommonModule,
    ResolucionRoutingModule
  ]
})
export class ResolucionModule { }
