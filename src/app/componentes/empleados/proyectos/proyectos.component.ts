import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  // E5 si quiero mostrar en el html
  empleadoId:number;


  /*E3 hacemos lo mismo que haciamos paraobtener los parametros dinamicos
  de la ruta con ActivitedRoute en cuaol nos devuelve informacion sobre la ruta 
  activa en este momento */
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // E4 accediendo recupero los parametros pero tenemos que pasar atraves del
    // padre (parent) y luego accedo a los parametros (de tipo observable) nos 
    // suscribimos
    this.activatedRoute.parent?.params.subscribe(params =>{
      console.log(params.empleadoId);
      // E5
      this.empleadoId=params.empleadoId;
    });
    
  }

}
