import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
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
		let headers : Headers = new Headers({
			authorization : 'Baerer ' + localStorage.getItem('currentUser')
		});
		let options = new RequestOptions({ headers });
		return this._http.get(this._host, options)
				.map(response => response.json());
	}

	getById(id : number) : Observable<Cliente> {
		let headers : Headers = new Headers({
			authorization : 'Baerer ' + localStorage.getItem('currentUser')
		});
		let options = new RequestOptions({ headers });
		return this._http.get(this._host + '/' + id, options)
				.map(response => response.json());
	}

	save(cliente : Cliente ) : Observable<Cliente> {
		let headers : Headers = new Headers({
			authorization : 'Baerer ' + localStorage.getItem('currentUser')
		});
		let options = new RequestOptions({ headers });
		return this._http.post(this._host, cliente, options)
			.map(response => response.json());
	}
}