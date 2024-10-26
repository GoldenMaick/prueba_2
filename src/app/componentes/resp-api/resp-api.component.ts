import { Component, OnInit } from '@angular/core';
import { APIservicioService } from 'src/app/servicio/apiservicio.service';

@Component({
  selector: 'app-resp-api',
  templateUrl: './resp-api.component.html',
  styleUrls: ['./resp-api.component.scss'],
})
export class RespApiComponent  implements OnInit {
  public items:any

  constructor(private servicioapi:APIservicioService) {}

  ngOnInit() {
    this.servicioapi.mostrarResultados().subscribe({   //aca se llama a la funcionaliad y se suscribe para poder ver y utilizar el servicio

      next:(respuestaAPI:any)=>{   //aca se muestra lo que pasaria si la respuesta de la api fuese correcta
      console.log(respuestaAPI)
      this.items=respuestaAPI
      localStorage.setItem('memoriaLocal',JSON.stringify(respuestaAPI)) // aca se guarda los datos traidos e la api en la memoria local de navegador
      
      },
      
      error:(errorAPI:any)=>{    // aca se muestra lo que pasaria si la respuesta de la api fuese incorrecta
      
        console.error(errorAPI)
      }
      
      
      })




  }

}
