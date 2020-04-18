import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ResolucionAgregarComponent } from './resolucion-agregar/resolucion-agregar.component';

const routes: Routes = [
  { 
    path: '', component: ResolucionAgregarComponent, 
    children: [
      { path: 'agregar', component: ResolucionAgregarComponent  },
    ],
  },
  //{ path: 'agregar', component: ResolucionAgregarComponent }
  //{ path: '', pathMatch:'full', redirectTo: 'consultar' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResolucionRoutingModule { }
