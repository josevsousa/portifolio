import { Injectable } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";

import { Contato } from "../models/formContato";

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatos: AngularFirestoreCollection<Contato>;

  constructor(
    private db: AngularFirestore,
    private afs: AngularFireAuth
    ) {
      this.contatos = this.db.collection<Contato>('/contatos');
  }

  addContato(form) {
    //new id
    const uid = this.db.createId();

    // registro no firestore
    const contatoRef: AngularFirestoreDocument<Contato> = this.db.doc(`contatos/${uid}`);
  
    // contato
    const contato_data = {
      uid,
      email: form.value.email,
      nome: form.value.nome,
      message: form.value.messagem
    }

    return contatoRef.set(contato_data);

  }
  


}
