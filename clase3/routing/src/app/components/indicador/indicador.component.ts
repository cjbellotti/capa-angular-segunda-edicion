import { Component } from '@angular/core';
import { IndicadorService } from '../../services/indicador.service';

@Component({
	selector : 'indicador',
	templateUrl : './indicador.component.html',
	styleUrls : [ './indicador.component.css']
})
export class IndicadorComponent {

	public cantidad : number = 0;

	constructor (
			private _indicadorService : IndicadorService
		) {}

	ngOnInit() {
		this._indicadorService.getIncrementarEvent()
			.subscribe(() => {
				this.cantidad++;
			});
	}

}