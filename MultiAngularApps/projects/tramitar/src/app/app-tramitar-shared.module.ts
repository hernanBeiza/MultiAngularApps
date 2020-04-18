import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppSharedRoutingModule } from './app-shared-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppSharedRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
})
export class AppTramitarSharedModule { }
