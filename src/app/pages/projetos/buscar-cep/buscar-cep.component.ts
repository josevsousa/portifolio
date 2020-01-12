import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { BuscaCepService } from "../../../services/busca-cep.service";

@Component({
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.component.html',
  styleUrls: ['./buscar-cep.component.css']
})
export class BuscarCepComponent implements OnInit {


  inputCep: string = "";
  msgErro: string = "Error";
  validoSubmit: boolean = true;

  maskValue: string;

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
    private buscaCepService: BuscaCepService
  ) {
   }

  ngOnInit() {

  }


  ngSubmit(){
      this.buscaCepService.getCep();
        
  }

  ngKeyup(){
    const cep = this.inputCep; 
    if( (cep.length == 5) && (cep[(cep.length)-1] != '-')){
      this.inputCep = `${cep}-`
    };

    // console.log(cepEdit);
  }

  valido(){
    return true
  }

 
}
