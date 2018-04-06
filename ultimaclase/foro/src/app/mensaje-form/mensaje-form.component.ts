import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mensaje } from '../models/mensaje';

@Component({
  selector: 'mensaje-form',
  templateUrl: './mensaje-form.component.html',
  styleUrls: ['./mensaje-form.component.css']
})
export class MensajeFormComponent implements OnInit {

  @Input('mensajeAResponder') mensajeAResponder : Mensaje = new Mensaje();
  @Input('asuntoNuevo') asuntoNuevo : boolean = false;
  @Output('enviar') enviar : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  	if (this.asuntoNuevo) {
  		this.mensajeAResponder.contenido = '';
  	}
  }

  submit(f : any) {
  	var contenido = (this.mensajeAResponder.contenido.length > 0) ? this.mensajeAResponder.contenido + '\n===================================================================\n\t' : '';
  	contenido += f.contenido;
  	this.enviar.emit({
  		asunto : f.titulo,
  		contenido
  	});
  }
}
