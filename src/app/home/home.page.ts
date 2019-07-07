import { CalculadoraService } from './../services/calculadora.service';
import { Component, Input, Output} from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  precio_base:number = 0;
  retefuente:number = 0;
  reteica:number = 0;
  sobre_la_base_40:number = 0;
  seguridad_social:number = 0;
  total:number = 0;

  constructor(private _calculadoraservice:CalculadoraService) {
  }

  onClick(precio_base:number){ 
    this.precio_base = precio_base;
    this.retefuente = precio_base * 0.06;
    this.reteica = (precio_base * 0.966) / 1000;
    this.sobre_la_base_40 = precio_base * 0.4;
    this.seguridad_social = this.sobre_la_base_40 * 0.2902;
    this.total = +precio_base + this.retefuente + this.reteica + this.sobre_la_base_40 + this.seguridad_social;


    console.log("Boton funcionando");
    console.log(this.retefuente);
    console.log(this.reteica);
    console.log(this.sobre_la_base_40);
    console.log(this.seguridad_social);
  } 
}
