import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TramitarRoutingModule } from './tramitar-routing.module';

import { ConsultarComponent } from './consultar/consultar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    ConsultarComponent, MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    TramitarRoutingModule
  ]
})
export class TramitarModule { }
