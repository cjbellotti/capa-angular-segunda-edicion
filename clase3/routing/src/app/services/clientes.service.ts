import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

import { Cliente } from '../models/cliente';

@Injectable()
export class ClienteService {

	private _host : string = environment.host + '/clientes';

	constructor(
			private _http : Http
		){}

	getAll() : Observable<Array<Cliente>> {
		return this._http.get(this._host)
				.map(response => response.json());
	}

	getById(id : number) : Observable<Cliente> {
		return this._http.get(this._host + '/' + id)
				.map(response => response.json());
	}

	save(cliente : Cliente ) : Observable<Cliente> {
		return this._http.post(this._host, cliente)
			.map(response => response.json());
	}
}