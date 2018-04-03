import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector : 'cliente-form',
	templateUrl : './cliente-form.component.html'
})

export class ClienteFormComponent {

	@Output ('aceptar') aceptarEvent : EventEmitter<any> = new EventEmitter<any>();

	aceptar(datos : any) {
		this.aceptarEvent.emit(datos);
	}

}