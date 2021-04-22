import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {


  // D5 siqueremos utlizar en el html lo mas comodo es crear una variable
  empleadoId:number;


  // D3 tenemos que inyectar un objeto activateRoute de angular   que obviamente
  // se va a importar arriba... gracias a esto podremos acceder
  // en este caso lo que nos interesa son los parametros de la ruta activa lo que
  // yo he definido como dinamico...
  constructor(private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    // D4 voy a acceder a su propiedad params el cual es de tipo observable 
    // reciben los cambios  que van 
    // sucediendo... por lo tanto tenemos que suscribirnos
    // los observables y su metodo suscribe siempre reciben una funcion  anonima
    // y dentro de esta funcion anonima recibiremos una funcion exactamente 
    // para esos params
    this.activatedRoute.params.subscribe(params=>{
      // si realmente quiero acceder al id enotnces aniado el .empleadoId 
      console.log(params.empleadoId);
      // D5
      this.empleadoId=params.empleadoId;
    });
  }

}
