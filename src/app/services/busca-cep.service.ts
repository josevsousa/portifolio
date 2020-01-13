import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor( private httpClient: HttpClient ) { }

  getCep_(){
    console.log("buscando cep no service");
  }

  public getCep(url){
    return  this.httpClient.get(`https://viacep.com.br/ws/${url}/json`);
  }

}
