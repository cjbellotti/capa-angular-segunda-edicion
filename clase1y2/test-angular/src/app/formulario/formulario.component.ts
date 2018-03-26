import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() texto : string = '';
  @Output('agregar') agregarEvent : EventEmitter<string> = new EventEmitter<string>();
  @Output('cancelar') cancelarEvent : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  agregar() {
  	this.agregarEvent.emit(this.texto);
  	this.texto ='';
  }

  cancelar() {
  	this.cancelarEvent.emit();
  }
  
}
