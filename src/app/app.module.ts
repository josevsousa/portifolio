import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';

import { InicioComponent } from './pages/inicio/inicio.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { SharedModule } from './shared/shared.module';
import { ProjetosModule } from './pages/projetos/projetos.module';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CursosComponent,
    ContatoComponent,
    NavBarComponent,
    UserProfileComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProjetosModule,
    ReactiveFormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
