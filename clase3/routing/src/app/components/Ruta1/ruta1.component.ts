import { Component } from '@angular/core';
import { ClienteService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente';

@Component({
	selector : 'ruta1',
	templateUrl : './ruta1.component.html',
	styleUrls : [ './ruta1.component.css']
})

export class Ruta1Component {

	clientes : Cliente[] = new Array<Cliente>();
	cliente : Cliente = new Cliente();

	constructor(
			private _clienteService : ClienteService
		){}

	ngOnInit() {
		this._clienteService.getAll()
			.subscribe((response) => {
				console.log(response);
				this.clientes = response;
			});

		this._clienteService.getById(5)
			.subscribe((response) => {
				console.log(response);
				this.cliente = response;
			})
	}

	aceptar(cliente : Cliente) {
		console.log(cliente);
		this._clienteService.save(cliente)
			.subscribe(
				response => {
					console.log('OK');
				},
				err => {
					console.log('ERROR')
					console.log(err);
				}
			);
	}
}