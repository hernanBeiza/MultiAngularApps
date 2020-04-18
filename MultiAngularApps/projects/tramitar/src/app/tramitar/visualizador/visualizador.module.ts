import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { VisualizadorRoutingModule } from './visualizador-routing.module';
import { VisualizadorComponent } from './visualizador.component';

@NgModule({
  declarations: [VisualizadorComponent],
  imports: [
    CommonModule,
    VisualizadorRoutingModule
  ]
})
export class VisualizadorModule { }
