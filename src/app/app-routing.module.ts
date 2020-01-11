import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from "./pages/inicio/inicio.component";
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { BuscarCepComponent } from './pages/projetos/buscar-cep/buscar-cep.component';
import { ContatoComponent } from './pages/contato/contato.component';



const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo:'inicio', pathMatch: 'full'},  
  {path: 'sobre', component: SobreComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'buscar-cep', component: BuscarCepComponent},
  {path: 'contato', component: ContatoComponent},
  {path: '**', component: InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
