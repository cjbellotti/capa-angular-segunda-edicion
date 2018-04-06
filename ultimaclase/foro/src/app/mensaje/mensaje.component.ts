import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mensaje } from '../models/mensaje';

@Component({
  selector: 'mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  @Input('mensaje') mensaje : Mensaje = new Mensaje();
  @Output('responder') responder : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  doResponder() {
  	this.responder.emit(this.mensaje);
  }
}
