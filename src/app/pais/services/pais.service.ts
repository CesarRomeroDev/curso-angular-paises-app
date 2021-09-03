import { HttpClient } from '@angular/common/http';              //3- se agrega automaticamente al declarar el constructor HttpClient
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';         //3.3- (tipado de la petricion de RestCountries) se importa Country 

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';   //1- ingresamos la url que guardamos en postman y la agregamos como propiedad privada
  
  //2- para hacer peticiones http tenemos que usar el modulo api de Angular y tenemos que implementarlo en el modulo global app.module.ts
  constructor( private http: HttpClient) { }

  //4- todo listo para trabajar las Peticiones http
  // busacarPais( termino: string ): Observable<any> {             //5- la declaracion "termino" viene de [(ngModel)]="termino" que se encuentra en por-pais.component.html

  //   const url =  `${ this.apiUrl }/name/${ termino } `;          //6- con el termino voy hacer lo siguente 
  //     return this.http.get( url );                              //7- y mandamos el url 
  //                                                               //8- ahora nos vamos a la carpeta por-pais en el archivo por_pais.component
  
  // }

  busacarPais( termino: string ): Observable<Country[]> {                //3.2- (tipado de la petricion de RestCountries)  cambiamos any por Country[]

    const url =  `${ this.apiUrl }/name/${ termino } `;
      return this.http.get<Country[]>( url );                             //3.4- (tipado de la petricion de RestCountries) tambien agregamos Country                          
                                                                
  
  }


}
