import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarComponent } from './consultar/consultar.component';

const routes: Routes = [
  { path: 'consultar', component: ConsultarComponent },
  { path: 'visualizador',   loadChildren: () => import('./visualizador/visualizador.module').then(m => m.VisualizadorModule) },
  { path: '', pathMatch:'full', redirectTo: 'consultar' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TramitarRoutingModule { }
