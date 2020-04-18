import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',   loadChildren: () => import('./tramitar/tramitar.module').then(m => m.TramitarModule) },
  //{ path: '', pathMatch:'full', redirectTo: 'consultar' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSharedRoutingModule { }
