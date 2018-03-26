import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector : 'ruta2',
	templateUrl : './ruta2.component.html',
	styleUrls : [ './ruta2.component.css']
})
export class Ruta2Component {

	constructor(
			private _route : ActivatedRoute
		) {}

	ngOnInit() {
		this._route
			.queryParams
			.subscribe((params : any) => {
				var p = Object.assign({}, params);
				if(p.lista) {
					p.lista = p.lista.split(',');
					p.lista = p.lista.map(item => parseInt(item.toString()));
				}
				console.log(p);
			});
	}

}