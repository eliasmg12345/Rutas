import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { DetalleEmpleadoComponent } from './componentes/detalle-empleado/detalle-empleado.component';
import { CurriculumComponent } from './componentes/empleados/curriculum/curriculum.component';
import { ExperienciaComponent } from './componentes/empleados/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/empleados/proyectos/proyectos.component';
import { InfoComponent } from './componentes/info/info.component';
import { RandomGuard } from './random.guard';


/* A1  para la definicion de RUTAS trabajamos en el array routes
 en este caso es de tipo Routes y lo unico que tenemos que definicr aqui son
  ojetos con una sola estructura muy concreta,,,,esta estructura tiene que tener como minimo
 dos propiedades la propiedad path (lo que se escribe en el navegador) y el componente que se
 va  a activar en este caso la clase a la que corresponda luego asegurarnos que se importe
 arriba
 donde se activa el contenido del componente?  
 tenemos una etiqueta muy importante con rutas en el html A2 */
const routes: Routes = [

  /* A2 que reconozca un patron de rutas cuando solo colocamos 4200
   seria como la ruta raiz ...ruta home..para eso ponemos pathMatch que tiene 
   dos tipos de valores o full(que tiene que coincidir con el espacio vacio)
   o prefix(el que ve lo que tenemos declarado)
   puede redirigir a un componente o a otro por ejemplo a 'informacion'  */
  {path:'',pathMatch:'full',redirectTo:'informacion'},


  // {path:'informacion',component:InfoComponent},


  // para que me redirija por ejemplo
  {path:'about',redirectTo:'sobre'},

  {path:'sobre',component:AboutComponent},

  {path:'contacto',component:ContactComponent},

  // D2 le voy a decir que componente se va activar cuando yo capture este path
  // el path quiero que cumpla el patron de abajo que tenga una parte estatica 
  // que sea empleados y luego una dianmica que sea el id de ese empleado
  // para eso la tenemos que preceder de dos puntos...nos vamos ahora al ts D3
  // {path:'empleados/:empleadoId',component:DetalleEmpleadoComponent},



  /*F2 como no tenemos muchas herramientsa por ej para logins etc
  lo que aremos es crear un guards aleatorio  
  en la terminal ng generate guard Random  
  luego me dice que tipo de guard quiero utilizar seleccionamos el 
  CanActivate el cual bloquea el poder navegar hacia una ruta en concreto
  CanActivateChild bloquea el poder activar o navegar hacia una ruta con hijos
  CanDeadActivated bloquea o no la salida de un componente activo 
  CanLoad lo mismo pero nos permite cargar o no un componente

  ahora una vez creado nos dirigimos a random.guard.ts F3
  */
  /*F5 si queremos por ejemplo bloquear la ruta de ifnormacion y quiero que 
  se acceda si el numero aleatorio sale mayor a 0.4...utilizamos la 
  propiedad canActivate...dentro de este recibimos un array....aqui podemos poner 
  todos los aguards que quisieramos  si vevuelve true podre acceder a InfoComponent
   ...AHORA antes de enrtar a 'informacion' primero va a pasar por RandomGuard
  */
  {path:'informacion',component:InfoComponent,canActivate:[RandomGuard]},


  // E2  de la propiedad padre utilizar la propiedad children
  // esta propiedad lo que me va permitir definir es una array de tipo fijo
  // ojo asociada a la ruta padre...dentro de este array...la priemra ruta es 
  // de proyectos, la segunda experiencia, la tercera curriculum
  // Ahora el router-oulet especifico concreto estara en cada html...siempre
  // colocado dentro del componente padre
  // ahora vamos a tomar el componente Proyecto para ver como podemos acceder al Id
  // de este empleado para eso al ts de proyectos E3
  {path:'empleados/:empleadoId',component:DetalleEmpleadoComponent, children:[
      {path:'proyectos',component:ProyectosComponent},
      {path:'experiencia',component:ExperienciaComponent},
      {path:'curriculum',component:CurriculumComponent}
    ]
  },

  // si nunguna a conseguido resolver las peticiones pondremos una ruta comodin
  {path:'**',redirectTo:'contacto'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
haciendo rutas dinamicas que apuntes al mismo componente pero 
localhost:4200/empleados/122
localhost:4200/empleados/456
localhost:4200/empleados/324

*/