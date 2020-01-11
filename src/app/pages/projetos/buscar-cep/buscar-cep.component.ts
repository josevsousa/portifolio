import { Component, OnInit } from '@angular/core';
import { Form, Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.component.html',
  styleUrls: ['./buscar-cep.component.css']
})
export class BuscarCepComponent implements OnInit {


  formulario: FormGroup;
  msgErro: string = "Error";

  // valores do retorno google maps
  // address = {
  //   cep: "",
  //   logradouro: "",
  //   complemento: "",
  //   bairro: "",
  //   localidade: "",
  //   uf: "",
  //   unidade: "",
  //   ibge: "",
  //   gia: ""
  // }

  constructor(
    private formBuilder: FormBuilder,
  ) {
   }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      cep: [null, Validators.required ]
    });
  }


  ngSubmit(){
      console.log(this.formulario.value)
        
  }

  ngKeyup(){
    console.log(this.formulario.value);
    
    // console.log(cepEdit);
  }

  valido(){
    return true
  }

 
}
