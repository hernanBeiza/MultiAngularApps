import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizadorComponent } from './visualizador.component';

const routes: Routes = [
  { 
    path: '', component: VisualizadorComponent ,
    children: [
      { path: 'resolucion', loadChildren: () => import('./resolucion/resolucion.module').then(m => m.ResolucionModule) },
    ],
  },
  //{ path: '', pathMatch:'full', redirectTo: 'consultar' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizadorRoutingModule { }
