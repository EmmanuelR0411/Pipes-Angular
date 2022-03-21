import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  
  //i18nSelect
  nombre: string = 'Emmanuel';
  genero: string = 'masculino';

  reinicioBtn: boolean = true;

  @ViewChild('reiniciar') btnReinicio!: ElementRef<HTMLButtonElement>;


  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro','Regina','Emmanuel', 'Amairani'];
  

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando'

  }

  cambiarNombre(){
    if(this.genero == 'masculino'){
      this.genero = 'femenino';
      this.nombre = 'Regina';
    } else {
      this.nombre = 'Emmanuel';
      this.genero = 'masculino';
    }
  }

  quitarCliente(){
    if(this.clientes.length === 1){
      this.reinicioBtn = false;
    }

    this.clientes.pop();
    
  }

  reiniciarClientes(){
    this.clientes = ['Maria', 'Pedro','Regina','Emmanuel', 'Amairani'];
    this.reinicioBtn = true;
  }


  //Key value pipe
  persona = {
    nombre: 'Emmanuel',
    edad: 23,
    direccion: 'CDMX'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async pipe
  miObservable = interval( 2000 );

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 3500);
  })

}
