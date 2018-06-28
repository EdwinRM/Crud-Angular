import { Component } from '@angular/core';

import { Empleados } from './models/empleados'; //importo la clase

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadosArray:Empleados[] = [ //arreglo de empleados
{id: 1, nombre:"Edwin", ciudad:"Queretaro"},
{id: 2, nombre:"Raul", ciudad:"Queretaro"},
{id: 3, nombre:"Cesar", ciudad:"Queretaro"},
  ];

selectedEmpleado: Empleados = new Empleados();

Editar(empleado:Empleados){
  this.selectedEmpleado=empleado; // sera igual al empleado seleccionado
}

agregareditar(){
if(this.selectedEmpleado.id === 0){
  this.selectedEmpleado.id = this.empleadosArray.length + 1 ;
  this.empleadosArray.push(this.selectedEmpleado);
}
  this.selectedEmpleado = new Empleados();
}

eliminar(){
  if(confirm('Eliminar empleado?')){
    this.empleadosArray = this.empleadosArray.filter(x => x != this.selectedEmpleado);//filtrar empleado 
    this.selectedEmpleado = new Empleados();
  }
 
}
}
