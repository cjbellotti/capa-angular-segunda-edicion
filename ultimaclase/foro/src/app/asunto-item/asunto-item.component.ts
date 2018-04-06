import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'asunto-item',
  templateUrl: './asunto-item.component.html',
  styleUrls: ['./asunto-item.component.css']
})
export class AsuntoItemComponent implements OnInit {
  @Input('id') id : number = 0;
  @Input('titulo') titulo : string = ''; 
  @Input('autor') autor : string = '';
  @Input('cantidadMensajes') cantidadMensajes : number = 0;
  @Input('fecha') fecha : Date = new Date();
  @Output('ver') ver : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  doClick() {
    this.ver.emit(this.id);
  }
}
