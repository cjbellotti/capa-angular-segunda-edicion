import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

	private _uri = environment.host + '/login';

	constructor(
			private _http : Http,
			private _router : Router
		) {}

	login (datosLogin : any) : Observable<any> {
		let payload = {
			username : datosLogin.username,
			password : datosLogin.password
		};
		return this._http.post(this._uri, payload)
			.map(response => {
				localStorage.setItem('currentUser', response.json().token);
			});
	}

	logout() {
		localStorage.removeItem('currentUser');
		this._router.navigate(['/login']);
	}
}