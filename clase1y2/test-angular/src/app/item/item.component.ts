import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input('texto') texto : string = '';
  @Input('disableButton') disableButton : boolean = false;
  @Output('modificar') modificarEvent : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  modificar() {
  	this.modificarEvent.emit();
  }

}
