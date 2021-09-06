import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false                                                     //2.2- (manejo de herrores) nos creamos una nueva propiedad
                                                                                //4.2- (manejo de herrores) utilicemos nuestro hayError en nuestro HTML de por-pais.com.html
  paises: Country[] = [];                                                       //5.1(llenar la tabla de paises) raliza,os una propiedad llamada paises de tipo country y vemos que se importe

  constructor( private PaisService: PaisService ){}                             //9 importamos la clase PaisService que viene de pais.service.ts
  buscar( termino: string){
    this.hayError = false;                                                      //3.2- (manejo de herrores) justo cundo se presiona Enter par amndar el error
    this.termino = termino;

    // this.PaisService.busacarPais( this.termino ).subscribe( resp => {           //10- llamammos termino.
    //   console.log( resp );
    // });

    // this.PaisService.busacarPais( this.termino ).subscribe( (resp) => {         //1.2- (manejo de herrores)
    //   console.log(resp);
    // }, (err) => {
    //   this.hayError = true;
    // });

    // this.PaisService.busacarPais( this.termino ).subscribe( (paises) => {         //3.1- (tipado de la petricion de RestCountries)
    //   console.log(paises);
    //   this.paises = paises;
    // }, (err) => {
    //   this.hayError = true;
    // });


    this.PaisService.busacarPais( termino ).subscribe( (paises) => {
      console.log(paises);
      this.paises = paises;                                                       //5.2(llenar la tabla de paises)resivimos como argumento
    }, (err) => {
      this.hayError = true;
      this.paises = [];                                                           //5.3(llenar la tabla de paises) si tenemos alun error o un pais vacio no se muestra nada        
    });
  }

  sugerencias( termino:string ){
    this.hayError = false;
    // TODO: crear sugerencias
  }

}
