import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
	selector : 'cliente-form',
	templateUrl : './cliente-form.component.html'
})

export class ClienteFormComponent {

	@Input('cliente') cliente : Cliente = new Cliente();
	@Output ('aceptar') aceptarEvent : EventEmitter<Cliente> = new EventEmitter<Cliente>();

	aceptar() {
		this.aceptarEvent.emit(this.cliente);
	}

}