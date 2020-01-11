import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjetosComponent } from './projetos.component';
import { BuscarCepComponent } from './buscar-cep/buscar-cep.component';

const routes = [
  {path: 'projetos', component: ProjetosComponent},
  {path: 'buscar-cep', component: BuscarCepComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }
