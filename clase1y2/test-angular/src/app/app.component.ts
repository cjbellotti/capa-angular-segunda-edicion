import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Buen dia Grupo!!!!';
  //lista : string[] = ["Uno", "Dos", "Tres"];
  lista : Array<string>;
  //lista : Array<string> = new Array<string>();

  texto : string = '';

  nuevoFlag : boolean = false;

  nuevoColorFlag : boolean = false;

  numero : number = 123;

  fecha : Date = new Date();

  mensaje : string = 'Hola Mundo de los Pipes!!!!';

  constructor() {
  	console.log('Esto es el constructor.');
  	this.lista = [];
  }

  ngOnInit() {
  	console.log('Esto es el ngOnInit');
  	this.lista.push('Uno');
  	this.lista.push('Dos');
  	this.lista.push('Tres');
  	this.lista.push('Cuatro');
  }

  mostrar() {
  	console.log(this.texto);
  	this.nuevoColorFlag = true;
  }

  nuevo() {
  	this.nuevoFlag = true;
  }

  cancelar() {
  	this.nuevoFlag = false;
  	if (this.texto.length > 0) {
  		this.lista.push(this.texto);
  	}
  }

  agregar(texto : string) {
  	this.nuevoFlag = false;
  	this.lista.push(texto);
  	this.texto = '';
  }

  modificar(index : number) {
  	this.nuevoFlag = true;
  	this.texto = this.lista[index];
  	this.lista.splice(index, 1);
  }

  getTexto() : string {
  	return this.texto;
  }

  isNuevoColor() : boolean {
  	return this.nuevoColorFlag;
  }
}
