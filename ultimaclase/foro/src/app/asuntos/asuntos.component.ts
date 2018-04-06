import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Asunto } from '../models/asunto';

@Component({
  selector: 'asuntos',
  templateUrl: './asuntos.component.html',
  styleUrls: ['./asuntos.component.css']
})
export class AsuntosComponent implements OnInit {

  @Input ('asuntos') asuntos : Array<Asunto> = new Array<Asunto>();
  @Output ('ver') ver : EventEmitter<number> = new EventEmitter<number>();
 
  constructor() { }

  ngOnInit() {
  }

  doVer(asuntoId : number) {
  	this.ver.emit(asuntoId);
  }

}
