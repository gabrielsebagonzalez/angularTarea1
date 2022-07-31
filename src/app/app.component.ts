import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'tarea1';

  boton = false

  usuarios: Usuarios [] = [
    {nombre : "Juan" , costos: "2500"},
    {nombre: "Carlos" , costos: "3000"},
    {nombre: "Cecilia", costos: "4500"},

  ];

  ocultarUsuarios() {
    this.usuarios = []
    this.boton = true
  }


}

interface Usuarios {
  nombre : string;
  costos : string;
}











