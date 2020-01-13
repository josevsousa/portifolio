import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { BuscaCepService } from "../../../services/busca-cep.service";
import { isNumber } from 'util';

@Component({
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.component.html',
  styleUrls: ['./buscar-cep.component.css']
})
export class BuscarCepComponent implements OnInit {


  inputCep: string;
  msgErro: string = "Error";
  validando: boolean = true;
  valido: boolean = false;
  loading: boolean = true;
  cepEncontrado: any;


  maskValue: string;

  // valores do retorno google maps
  

  constructor(
    private formBuilder: FormBuilder,
    private buscaCepService: BuscaCepService
  ) {
   }

  ngOnInit() {
    this.cepEncontrado = {
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: "",
      unidade: "",
      ibge: "",
      gia: ""
    }
  }

  ngKeyup(){

    this.valido = false;
    this.validando = true;

    this.loading = false;

    // input
    const cep = this.inputCep;

    // separando os digitos
    const cepArray = (cep.split(''));

    // novo valor para o cep formatado
    let newCep = "";


    // filtrando o cep cadastrado
    cepArray.forEach((dig, i)=>{
      // ver se é um digito aceitando o zero
      const n = ((parseInt(dig)+1));

      if( (n == NaN) && (dig != " ") || (n >= 1) ){
        // adicionando digito ao novo valor do cep
        newCep += dig;
        // acrescentando um separador no cep 
        if(i == 4){
          newCep += "-";
        }else if(i == 8){
          this.validar(newCep);
        }
        console.log()
      }  
    });

    this.inputCep = newCep;  
    if(this.inputCep == ""){
      this.loading = true;
    }
    
  }  





  validar(cep){
    //valida se tudo e numero
    this.buscaCepService.getCep(String(cep)).subscribe((data)=>{
      if (!data['erro']) {
        this.validando = true;
        this.valido = true; 
        this.cepEncontrado = data;
        console.log(data)
      } else {
        this.validando = false;
        this.msgErro = "cep errado";
      }
    this.loading = true;
    });
  }



}
