import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjetosComponent } from './projetos.component';
import { BuscarCepComponent } from './buscar-cep/buscar-cep.component';

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
  