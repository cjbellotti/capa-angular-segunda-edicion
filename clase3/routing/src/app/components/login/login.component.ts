import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
	selector : 'login',
	templateUrl : './login.component.html',
	styleUrls : [ './login.component.css']
})
export class LoginComponent {
	public error : boolean = false;

	constructor(
			private _loginService : LoginService,
			private _router : Router
		){}
	login(datosLogin : any) {
		console.log(datosLogin);
		this._loginService.login(datosLogin)
			.subscribe(response => {
				this._router.navigate(['/ruta1']);	
			},
			err => {
				this.error = true;
			});
	}
}