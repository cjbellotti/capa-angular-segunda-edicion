import { Component } from '@angular/core';
import { ClienteService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente';
import { IndicadorService } from '../../services/indicador.service';

@Component({
	selector : 'ruta1',
	templateUrl : './ruta1.component.html',
	styleUrls : [ './ruta1.component.css']
})

export class Ruta1Component {

	clientes : Cliente[] = new Array<Cliente>();
	cliente : Cliente = new Cliente();

	constructor(
			private _clienteService : ClienteService,
			private _indicadorService : IndicadorService
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

	aceptar(data : any) {
		var cliente = new Cliente(data.id, data.nombre, data.apellido);
		this._clienteService.save(cliente)
			.subscribe(
				response => {
					console.log('OK');
					this._indicadorService.agrega();
				},
				err => {
					console.log('ERROR')
					console.log(err);
				}
			);
	}
}