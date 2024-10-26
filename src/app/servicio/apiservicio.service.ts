import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIservicioService {
 url:string='https://jsonplaceholder.typicode.com/posts/'; // se utiliza la variable url para guardar el link de la api
  constructor(private http:HttpClient) { }

   mostrarResultados(){

  return this.http.get(this.url) //se retorna la variable url a traves de la fucionalidad mostrarResultado

}



}
