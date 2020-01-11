import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { ProjetosComponent } from './projetos.component';
import { BuscarCepComponent } from './buscar-cep/buscar-cep.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProjetosComponent,
    BuscarCepComponent
  ]

})
export class ProjetosModule { }
  