import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// C3 dejaremos que angularnos cree la instancia que vamos a necesitar  
// entonces lo aremos a traves de la inyeccion de dependencias
// en el constructor vamos a inyectar una dependecia de la clase router 

// con esto etamos diciendo a angular que con la variable llamada rou 
// usemos la clase Router...si no pingo private el rou solo estaria accesible
// dentro  del constructor
constructor(private rou:Router){
  
}

  
// C2 aqui como parametro recibiremos la ruta en formato string
// una vez pulse quierto hacer la navegacion hacia otra ruta o pagina
// entonces necesitamos un objeto propio de angular   
onClick(pRuta:string){
  // C2 tareas previas
  console.log('taread previas');
  // con el objeto rou que acabamos de crear el cual tiene que ser 
  // tratado como si fuera una propiedad tenemos un metodo navigate
  // en este caso ponemos la ruta a la cual queremos navegar
  this.rou.navigate([pRuta]);

}

}
