import { Injectable } from '@angular/core';
import { Asunto } from '../models/asunto';
import { Mensaje } from '../models/mensaje';
import { asuntos } from '../data/data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class AsuntoService {

	private _asuntos : Asunto[] = new Array<Asunto>();

	constructor() {
		this._asuntos = asuntos;
	}

	crearAsunto(asunto : Asunto) : Observable<any> {
		this._asuntos.push(asunto);
		return Observable.of(asunto);
	}

	crearMensaje(asuntoId : number, mensaje : Mensaje) : Observable<any> {
		var asunto = this._asuntos.find(item => item.id == asuntoId);
		if (asunto != null) {
			asunto.mensajes.push(mensaje);
		}
		return Observable.of(asunto);
	}

	getAsunto(asuntoId : number ) : Observable<Asunto> {
		var asunto = this._asuntos.find(item => item.id == asuntoId);
		return Observable.of(asunto);
	}

	getUltimos10Asuntos() : Observable<Array<Asunto>> {
		return Observable.of(this._asuntos);
	}
}