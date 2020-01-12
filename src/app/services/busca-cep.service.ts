import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor() { }

  getCep(){
    console.log("buscando cep no service");
  }
}
