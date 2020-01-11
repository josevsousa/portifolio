import { Component, OnInit } from '@angular/core';

import { ContatoService } from "../../services/contato.service";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {

  formulario: FormGroup;
  enviado: boolean = false;

  constructor(
    private contatoService: ContatoService,
    private formBuild: FormBuilder
  ) { }

  ngOnInit() {
   this.formulario = this.formBuild.group({
      email: [null, [Validators.required, Validators.email]],
      nome: [null, Validators.required],
      messagem: [null, Validators.required]
   });
  }

  ngSubmit(){
    this.contatoService.addContato(this.formulario)
      .then(()=>{
        this.enviado = !this.enviado;
      })
      .catch((erro)=>{
        console.log("Erro: " + erro);
      })
  }

  verificaValorTouchedValid(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  aplicaErroCss(campo) {
    return {
      'has-error': this.verificaValorTouchedValid(campo),
      'has-feedback': this.verificaValorTouchedValid(campo)
    }
  }

}
